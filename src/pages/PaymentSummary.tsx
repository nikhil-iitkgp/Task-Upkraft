import React from "react";

const PaymentSummary: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Payment Summary</h1>
      <p className="text-gray-600">
        This page will show your payment history and earnings.
      </p>
    </div>
  );
};

export default PaymentSummary;
