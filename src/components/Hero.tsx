import React from "react";
import { CheckCircle, ShieldCheck } from "lucide-react";
import { UrlInput } from "./UrlInput";

interface HeroProps {
  onUrlSubmit: (url: string) => void;
}

export function Hero({ onUrlSubmit }: HeroProps) {
  return (
    <section className="text-center mb-12">
      {/* Badge with Icon */}
      <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-semibold shadow-sm">
        <ShieldCheck className="h-5 w-5" />
        Simple, safe, and fast downloads
      </div>

      {/* Heading */}
      <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 dark:text-white mt-4">
        Download YouTube Videos
      </h1>
      <h2 className="text-5xl sm:text-6xl font-extrabold text-blue-500 mb-6">
        in the simplest way
      </h2>

      {/* Subtitle */}
      <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
        Just paste a YouTube URL, select your preferred format and quality, and download your content instantly.
      </p>

      {/* Features Section - No Card Effect */}
      <div className="flex flex-wrap items-center justify-center gap-8 mb-10 text-gray-600 dark:text-gray-400">
        <span className="flex items-center space-x-2">
          <CheckCircle className="h-5 w-5 text-blue-500" />
          <span>MP4 format</span>
        </span>
        <span className="flex items-center space-x-2">
          <CheckCircle className="h-5 w-5 text-blue-500" />
          <span>MP3 format</span>
        </span>
        <span className="flex items-center space-x-2">
          <CheckCircle className="h-5 w-5 text-blue-500" />
          <span>Playlist downloads</span>
        </span>
      </div>

      {/* URL Input */}
      <UrlInput onUrlSubmit={onUrlSubmit} />
    </section>
  );
}
