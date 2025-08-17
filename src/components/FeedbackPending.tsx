import React from "react";
import CircularProgress from "./CircularProgress";
import { ArrowRight } from "lucide-react";

const FeedbackPending: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 h-full min-h-[400px] flex flex-col">
      <h3 className="text-lg font-semibold text-gray-900 mb-8">
        Feedback Pending
      </h3>

      <div className="flex-1 flex flex-col justify-center">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <CircularProgress
              percentage={120} // 12 out of 10 scale, so 120%
              color="#EF4444"
              backgroundColor="#FEE2E2"
              showPercentage={false}
              size={120}
              strokeWidth={8}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl font-bold text-gray-900">12</span>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-600 text-center mb-8">
          Feedback Pending
        </p>
      </div>

      <button className="w-full bg-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2">
        <span>Give Feedback</span>
        <ArrowRight size={16} />
      </button>
    </div>
  );
};

export default FeedbackPending;
