import React from "react";
import { Youtube } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <nav className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <Youtube className="h-7 w-7 text-blue-500 transition-transform duration-300 hover:scale-110" />
            <span className="text-xl font-semibold text-gray-900 dark:text-white">
              Neotube
            </span>
          </div>

          {/* Right Side (Theme Toggle + GitHub Button) */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700 px-4 py-2 rounded-xl transition-all duration-300 shadow-sm"
            >
              <div className="p-1 rounded-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700">
                <SiGithub className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              </div>
              <span className="text-sm font-semibold">Star on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
