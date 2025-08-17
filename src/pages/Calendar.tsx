import React from "react";

const Calendar: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Calendar</h1>
      <p className="text-gray-600">
        This page will show your schedule and upcoming lessons.
      </p>
    </div>
  );
};

export default Calendar;
