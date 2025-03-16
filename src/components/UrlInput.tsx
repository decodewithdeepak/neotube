import React, { useState } from "react";
import { Youtube, Download, AlertCircle } from "lucide-react";

interface UrlInputProps {
  onUrlSubmit: (url: string) => void;
}

export function UrlInput({ onUrlSubmit }: UrlInputProps) {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");

  // Function to validate YouTube URLs
  const isValidUrl = (url: string) => {
    const regex =
      /^(https?:\/\/)?(www\.)?(youtube\.com\/watch\?v=|youtu\.be\/)[\w-]+(&.*)?$/;
    return regex.test(url);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) {
      setError("Please enter a URL.");
      return;
    }
    if (!isValidUrl(url)) {
      setError("Enter a valid YouTube URL.");
      return;
    }

    setError(""); // Clear error if valid
    onUrlSubmit(url);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mt-6">
      <div className="flex flex-col gap-2">
        {/* Input Field with Download Button Inside */}
        <div className="relative w-full">
          <Youtube className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
              setError(""); // Clear error when user types
            }}
            placeholder="Paste YouTube URL here..."
            className={`w-full pl-12 pr-[120px] py-3 rounded-lg border ${
              error ? "border-red-500" : "border-gray-200 dark:border-gray-700"
            } bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 ${
              error ? "focus:ring-red-500" : "focus:ring-blue-500"
            }`}
          />
          <button
            type="submit"
            disabled={!url.trim() || error !== ""}
            className={`absolute right-1 top-1/2 transform -translate-y-1/2 px-5 py-2 rounded-lg flex items-center gap-2 transition-all duration-300 ${
              !url.trim() || error
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600 text-white"
            }`}
          >
            <Download className="h-5 w-5" />
            <span>Download</span>
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="mt-1 flex items-center text-red-500 text-sm">
            <AlertCircle className="h-5 w-5 mr-2" />
            {error}
          </div>
        )}
      </div>
    </form>
  );
}
