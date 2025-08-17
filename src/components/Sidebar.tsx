import React from "react";
import {
  Home,
  Users,
  BookOpen,
  Calendar,
  FileText,
  Music,
  Settings,
  LogOut,
  DollarSign,
  X,
} from "lucide-react";
import { cn } from "../lib/utils";

interface SidebarItem {
  icon: React.ReactNode;
  label: string;
  key: string;
  active?: boolean;
}

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeItem: string;
  onItemClick: (key: string) => void;
}

const sidebarItems: SidebarItem[] = [
  { icon: <Home size={20} />, label: "Home", key: "home" },
  { icon: <Users size={20} />, label: "My Students", key: "my-students" },
  { icon: <BookOpen size={20} />, label: "My Courses", key: "my-courses" },
  { icon: <Calendar size={20} />, label: "Calendar", key: "calendar" },
  { icon: <FileText size={20} />, label: "Assignment", key: "assignment" },
  { icon: <Music size={20} />, label: "Music Library", key: "music-library" },
  {
    icon: <Settings size={20} />,
    label: "Practice Studio",
    key: "practice-studio",
  },
  {
    icon: <DollarSign size={20} />,
    label: "Payment Summary",
    key: "payment-summary",
  },
  { icon: <FileText size={20} />, label: "Refer & Earn", key: "refer-earn" },
  { icon: <Settings size={20} />, label: "Settings", key: "settings" },
];

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onClose,
  activeItem,
  onItemClick,
}) => {
  const handleItemClick = (key: string) => {
    onItemClick(key);
    // Close sidebar on mobile after selecting an item
    if (window.innerWidth < 1024) {
      onClose();
    }
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed lg:static inset-y-0 left-0 z-50 w-56 bg-gradient-to-b from-purple-600 to-purple-800 h-screen flex flex-col transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        {/* Logo and Close Button */}
        <div className="p-6 flex items-center justify-between">
          <div className="text-white text-2xl font-bold">UPKRAFT</div>
          <button
            onClick={onClose}
            className="lg:hidden text-white hover:text-gray-300 transition-colors"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 px-2">
          {sidebarItems.map((item, index) => (
            <div
              key={index}
              onClick={() => handleItemClick(item.key)}
              className={cn(
                "flex items-center px-4 py-3 text-gray-300 hover:bg-purple-700 hover:text-white transition-colors duration-200 cursor-pointer rounded-lg mx-2 mb-1",
                activeItem === item.key && "bg-purple-700 text-white"
              )}
            >
              <span className="mr-3">{item.icon}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </nav>

        {/* Logout */}
        <div className="p-4 border-t border-purple-700">
          <div className="flex items-center px-4 py-3 text-gray-300 hover:bg-purple-700 hover:text-white transition-colors duration-200 cursor-pointer rounded-lg">
            <LogOut size={20} className="mr-3" />
            <span className="text-sm font-medium">Logout</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
