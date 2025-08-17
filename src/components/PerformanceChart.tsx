import React from "react";
import SemiCircularProgress from "./SemiCircularProgress";

const PerformanceChart: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 h-full min-h-[400px] flex flex-col">
      <div className="space-y-8 flex-1 flex flex-col justify-center">
        {/* Overall Course Performance */}
        <div className="text-center">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">
            Overall Course Performance
          </h3>
          <SemiCircularProgress
            percentage={76}
            color="#10B981"
            showPercentage={true}
            size={140}
            strokeWidth={10}
          />
        </div>

        {/* Overall Student Performance */}
        <div className="text-center">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">
            Overall Student Performance
          </h3>
          <SemiCircularProgress
            percentage={66}
            color="#F59E0B"
            showPercentage={true}
            size={140}
            strokeWidth={10}
          />
        </div>
      </div>
    </div>
  );
};

export default PerformanceChart;
