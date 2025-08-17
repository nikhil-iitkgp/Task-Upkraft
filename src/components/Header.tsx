import React from "react";
import { Search, Bell, Menu } from "lucide-react";

interface HeaderProps {
  onMenuToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle }) => {
  return (
    <header className="bg-white border-b border-gray-200 px-4 lg:px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button
          onClick={onMenuToggle}
          className="lg:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors"
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>

        {/* Search Bar */}
        <div className="flex-1 max-w-lg ml-4 lg:ml-0">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search here..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-8">
          {/* Telegram Icon */}
          <button
            className="p-2 hover:opacity-80 transition-opacity"
            aria-label="Telegram"
          >
            <img
              src="https://img.freepik.com/premium-vector/purple-telegram-logo-icon_1076610-109767.jpg?w=360"
              alt="Telegram"
              className="w-8 h-8 object-contain"
            />
          </button>

          {/* Notifications */}
          <button
            className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Notifications"
          >
            <Bell size={24} />
            <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
          </button>

          {/* User Profile */}
          <div className="flex items-center space-x-3">
            <div className="text-right">
              <div className="text-sm font-medium text-gray-900">
                Sherry Wolf
              </div>
              <div className="text-xs text-gray-500">Piano Tutor</div>
            </div>
            <div className="relative">
              <img
                src="https://i.pinimg.com/236x/ce/a8/62/cea862095b053477381fdcde2982ef8a.jpg"
                alt="Sherry Wolf"
                className="w-10 h-10 rounded-full object-cover border-2 border-gray-200"
              />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
