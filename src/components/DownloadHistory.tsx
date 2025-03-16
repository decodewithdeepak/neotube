import React from "react";
import { Download, Link2 } from "lucide-react";

interface DownloadHistoryProps {
  history: Array<{
    id: number;
    title: string;
    format: string;
    date: string;
    thumbnail: string;
    url: string;
  }>;
  onClearHistory?: () => void;
}

export function DownloadHistory({ history, onClearHistory }: DownloadHistoryProps) {
  return (
    <div className="mt-12">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
          Download History
        </h2>
        {onClearHistory && history.length > 0 && (
          <button
            onClick={onClearHistory}
            className="text-base bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 px-4 py-2 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition shadow-sm"
          >
            Clear History
          </button>
        )}
      </div>

      {/* If no history exists */}
      {history.length === 0 ? (
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-gray-100 dark:bg-gray-800 rounded-full">
            <Download className="h-8 w-8 text-gray-400 dark:text-gray-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            No downloads yet
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            Your download history will appear here once you download videos.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {history.map((item) => {
            const formatParts = item.format.split(" "); // Splitting "MP4 1080p" into ["MP4", "1080p"]

            return (
              <div
                key={item.id}
                className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm"
              >
                {/* Thumbnail */}
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-24 h-16 object-cover rounded-xl"
                />

                {/* Video Details */}
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-1 truncate">
                    {item.title}
                  </h3>

                  {/* Date & Format in the Same Line */}
                  <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
                    <span>
                      {new Date(item.date).toLocaleString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>

                    {/* Format Badge with Dot */}
                    <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-medium px-3 py-1 rounded-xl flex items-center gap-1">
                      <span>{formatParts[0]}</span> {/* MP4 */}
                      <span>•</span> {/* Dot */}
                      <span>{formatParts[1]}</span> {/* 1080p */}
                    </span>
                  </div>
                </div>

                {/* Video Link Icon */}
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-600 transition"
                  title="Open Video"
                >
                  <Link2 className="h-5 w-5" />
                </a>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
