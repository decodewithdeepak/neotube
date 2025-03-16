import React, { useState } from "react";
import { Download } from "lucide-react";

interface VideoPreviewProps {
  video: {
    title: string;
    channel: string;
    thumbnail: string;
    duration: string;
    formats: { quality: string; size: string }[];
    url: string;
  };
  onDownload: (format: string) => void;
}

export function VideoPreview({ video, onDownload }: VideoPreviewProps) {
  const [selectedFormat, setSelectedFormat] = useState<string | null>(null);

  const handleDownload = async () => {
    if (!selectedFormat) return;

    try {
      const response = await fetch(`/download?url=${encodeURIComponent(video.url)}&format=${selectedFormat}`);
      if (!response.ok) {
        throw new Error('Failed to download video');
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${video.title}-${selectedFormat}.mp4`; // Change file extension accordingly
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);

      onDownload(selectedFormat);
    } catch (error) {
      console.error('Error downloading video:', error);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 mb-12 shadow-md">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Video Thumbnail */}
        <div className="md:w-1/3">
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full aspect-video object-cover"
            />
            <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-md">
              {video.duration}
            </div>
          </div>
        </div>

        {/* Video Details & Download Options */}
        <div className="md:w-2/3">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-1">
            {video.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">{video.channel}</p>

          {/* Format Selection */}
          <div className="space-y-4">
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              Select format and quality:
            </p>

            {/* Format Buttons with Click & Hover Effect */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {video.formats.map((format) => (
                <button
                  key={format.quality}
                  onClick={() => setSelectedFormat(format.quality)}
                  className={`py-2 px-4 rounded-xl border transition-all duration-300 text-sm font-medium 
                    ${
                      selectedFormat === format.quality
                        ? "bg-blue-600 text-white border-blue-600" // Selected state
                        : "border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white hover:bg-blue-100 dark:hover:bg-blue-900 active:bg-blue-200 dark:active:bg-blue-800" // Subtle hover & click effect
                    }`}
                >
                  {format.quality}
                </button>
              ))}
            </div>
          </div>

          {/* Download Button with Animation */}
          <button
            onClick={handleDownload}
            disabled={!selectedFormat}
            className={`mt-6 w-full py-2 flex items-center justify-center gap-2 rounded-xl shadow-lg transition-all duration-300 text-lg font-semibold 
              ${
                selectedFormat
                  ? "bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
          >
            <Download className="h-5 w-5" />
            Download Now
          </button>
        </div>
      </div>
    </div>
  );
}
