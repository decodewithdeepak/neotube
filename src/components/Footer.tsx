import React from "react";
import { Youtube } from "lucide-react";
import { SiGithub } from "react-icons/si";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-gray-600 dark:text-gray-400 text-sm">
        
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <Youtube className="h-5 w-5 text-blue-500" />
          <span className="font-semibold">Neotube</span>
        </div>

        {/* Center Text */}
        <p className="text-center md:text-left">
          Built with care. For educational purposes only.
        </p>

        {/* Developer Credit + GitHub */}
        <div className="flex items-center space-x-6 mt-4 md:mt-0">
          <a 
            href="https://deepakmodi.vercel.app" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline font-semibold"
          >
            Developed by Deepak Modi
          </a>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <SiGithub className="h-5 w-5" />
          </a>
        </div>
        
      </div>
    </footer>
  );
}
