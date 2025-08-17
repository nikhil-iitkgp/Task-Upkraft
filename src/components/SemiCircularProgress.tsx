import React from "react";

interface SemiCircularProgressProps {
  percentage: number;
  color: string;
  size?: number;
  strokeWidth?: number;
  showPercentage?: boolean;
}

const SemiCircularProgress: React.FC<SemiCircularProgressProps> = ({
  percentage,
  color,
  size = 120,
  strokeWidth = 10,
  showPercentage = true,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex flex-col items-center">
      <div className="relative">
        <svg width={size} height={size / 2 + 30} className="overflow-visible">
          {/* Background arc */}
          <path
            d={`M ${strokeWidth / 2} ${size / 2} A ${radius} ${radius} 0 0 1 ${
              size - strokeWidth / 2
            } ${size / 2}`}
            fill="none"
            stroke="#E5E7EB"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
          />

          {/* Progress arc */}
          <path
            d={`M ${strokeWidth / 2} ${size / 2} A ${radius} ${radius} 0 0 1 ${
              size - strokeWidth / 2
            } ${size / 2}`}
            fill="none"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-out"
          />
        </svg>

        {/* Percentage text */}
        {showPercentage && (
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center">
            <div className="text-2xl font-bold text-gray-800">
              {(percentage / 10).toFixed(1)}
              <span className="text-sm text-gray-500">/10</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SemiCircularProgress;
