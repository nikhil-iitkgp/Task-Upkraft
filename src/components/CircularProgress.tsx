import React from "react";

interface CircularProgressProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  color?: string;
  backgroundColor?: string;
  showPercentage?: boolean;
  label?: string;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  percentage,
  size = 120,
  strokeWidth = 8,
  color = "#10B981",
  backgroundColor = "#E5E7EB",
  showPercentage = true,
  label,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div
        className="relative"
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        <svg className="transform -rotate-90" width={size} height={size}>
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={backgroundColor}
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          {/* Progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={color}
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-300 ease-in-out"
          />
        </svg>
        {showPercentage && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span
              className={`font-bold text-gray-900 ${
                size < 100 ? "text-sm" : "text-xl"
              }`}
            >
              {Math.round(percentage)}
              <span className={`${size < 100 ? "text-xs" : "text-sm"}`}>
                /10
              </span>
            </span>
          </div>
        )}
      </div>
      {label && (
        <p
          className={`mt-2 font-medium text-gray-600 text-center ${
            size < 100 ? "text-xs" : "text-xs"
          }`}
        >
          {label}
        </p>
      )}
    </div>
  );
};

export default CircularProgress;
