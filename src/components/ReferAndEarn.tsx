import React from "react";
import { ArrowRight } from "lucide-react";

const ReferAndEarn: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 h-full min-h-[300px] flex flex-col overflow-hidden">
      {/* Top Image Section */}
      <div className="flex-1 bg-gray-50 relative">
        <img
          src="https://connectfz.com/wp-content/uploads/2022/02/mujer-asombrada-2-chica-monedas-min.png"
          alt="Referral illustration"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Bottom Purple Section with Content */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-2 text-white">
        <h3 className="text-sm font-bold mb-1 text-center">Refer and Earn</h3>
        <p className="text-purple-100 text-xs text-center mb-2 leading-tight">
          Invite friends and earn exclusive rewards for every successful
          referral
        </p>

        {/* Refer Button */}
        <button className="bg-yellow-400 text-purple-900 px-2 py-1 rounded-md font-semibold hover:bg-yellow-300 transition-colors flex items-center justify-center space-x-1 text-xs w-full">
          <span>Refer Now</span>
          <ArrowRight size={12} />
        </button>
      </div>
    </div>
  );
};

export default ReferAndEarn;
