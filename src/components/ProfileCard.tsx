import React from "react";
import { Users, BookOpen, Award } from "lucide-react";

const ProfileCard: React.FC = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 h-full min-h-[300px] flex flex-col">
      <div className="flex flex-col items-center text-center flex-1">
        {/* Profile Image */}
        <div className="relative mb-6">
          <img
            src="https://i.pinimg.com/236x/ce/a8/62/cea862095b053477381fdcde2982ef8a.jpg"
            alt="Sherry Wolf"
            className="w-48 h-48 rounded-full object-cover border-4 border-yellow-400"
          />
          <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-green-500 border-3 border-white rounded-full"></div>
        </div>

        {/* Name and Title */}
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Sherry Wolf
        </h3>
        <p className="text-sm text-gray-500 mb-6">Piano Tutor</p>

        {/* Stats */}
        <div className="w-full space-y-4 flex-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Users size={18} className="text-purple-600" />
              <span className="text-sm text-gray-600">Students</span>
            </div>
            <span className="text-sm font-medium text-gray-900">30</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <BookOpen size={18} className="text-purple-600" />
              <span className="text-sm text-gray-600">Course</span>
            </div>
            <span className="text-sm font-medium text-gray-900">6</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Award size={18} className="text-purple-600" />
              <span className="text-sm text-gray-600">Reward</span>
            </div>
            <span className="text-sm font-medium text-gray-900">3</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
