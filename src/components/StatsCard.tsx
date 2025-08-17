import React from "react";

interface StatsCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  color?: "purple" | "green" | "blue" | "orange";
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  subtitle,
  color = "purple",
}) => {
  const colorClasses = {
    purple: "text-purple-600",
    green: "text-green-600",
    blue: "text-blue-600",
    orange: "text-orange-600",
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 h-full flex items-center justify-center">
      <div className="text-center">
        <h3 className={`text-3xl font-bold ${colorClasses[color]} mb-2`}>
          {value}
        </h3>
        <p className="text-sm font-medium text-gray-900 mb-1">{title}</p>
        <p className="text-xs text-gray-500">{subtitle}</p>
      </div>
    </div>
  );
};

export default StatsCard;
