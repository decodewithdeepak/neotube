import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { VideoPreview } from "./components/VideoPreview";
import { DownloadHistory } from "./components/DownloadHistory";

function App() {
  const [videoInfo, setVideoInfo] = useState<any>(null);
  const [history, setHistory] = useState<any[]>([]);
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    const savedHistory = localStorage.getItem("downloadHistory");
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  const handleUrlSubmit = (url: string) => {
    setVideoInfo({
      title: "Sample YouTube Video",
      channel: "Sample Channel",
      thumbnail: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=640",
      duration: "3:45",
      formats: [
        { quality: "1080p MP4", size: "" },
        { quality: "720p MP4", size: "" },
        { quality: "480p MP4", size: "" },
        { quality: "320kbps MP3", size: "" },
        { quality: "192kbps MP3", size: "" },
        { quality: "128kbps MP3", size: "" },
      ],
    });
    setShowPreview(true);
  };

  const handleDownload = (format: string) => {
    const newDownload = {
      id: Date.now(),
      title: videoInfo.title,
      format,
      date: new Date().toISOString(),
      thumbnail: videoInfo.thumbnail,
    };

    const updatedHistory = [newDownload, ...history].slice(0, 10);
    setHistory(updatedHistory);
    localStorage.setItem("downloadHistory", JSON.stringify(updatedHistory));
  };

  // **Clear History Function**
  const handleClearHistory = () => {
    setHistory([]); // Clear history in state
    localStorage.removeItem("downloadHistory"); // Clear from local storage
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Hero onUrlSubmit={handleUrlSubmit} />
        {showPreview && videoInfo && <VideoPreview video={videoInfo} onDownload={handleDownload} />}
        <DownloadHistory history={history} onClearHistory={handleClearHistory} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
