import React from "react";
import ProfileCard from "../components/ProfileCard";
import StatsCard from "../components/StatsCard";
import UpcomingLessons from "../components/UpcomingLessons";
import PerformanceChart from "../components/PerformanceChart";
import ReferAndEarn from "../components/ReferAndEarn";
import FeedbackPending from "../components/FeedbackPending";

const Home: React.FC = () => {
  return (
    <div className="space-y-4">
      {/* First Row - Profile, Stats, Stats, Refer and Earn (4 components) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 min-h-[280px]">
        {/* Profile Card */}
        <div className="col-span-1 h-full">
          <ProfileCard />
        </div>

        {/* First Stats Container - 3 stats vertically */}
        <div className="col-span-1 flex flex-col gap-4 h-full">
          <div className="flex-1">
            <StatsCard
              title="Total Active Students"
              value="30"
              subtitle=""
              color="purple"
            />
          </div>
          <div className="flex-1">
            <StatsCard
              title="Tutor CSAT Score"
              value="80%"
              subtitle=""
              color="green"
            />
          </div>
          <div className="flex-1">
            <StatsCard
              title="Assignment Completion Rate"
              value="15%"
              subtitle=""
              color="orange"
            />
          </div>
        </div>

        {/* Second Stats Container - 3 stats vertically */}
        <div className="col-span-1 flex flex-col gap-4 h-full">
          <div className="flex-1">
            <StatsCard
              title="Total Active Students"
              value="30"
              subtitle=""
              color="purple"
            />
          </div>
          <div className="flex-1">
            <StatsCard
              title="Tutor CSAT Score"
              value="80%"
              subtitle=""
              color="green"
            />
          </div>
          <div className="flex-1">
            <StatsCard
              title="Assignment Completion Rate"
              value="15%"
              subtitle=""
              color="orange"
            />
          </div>
        </div>

        {/* Refer and Earn */}
        <div className="col-span-1 h-full">
          <ReferAndEarn />
        </div>
      </div>

      {/* Second Row - Upcoming Lessons (2x width), Overall Performance, Feedback (3 components) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Upcoming Lessons - Takes 2x width */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2">
          <UpcomingLessons />
        </div>

        {/* Overall Performance */}
        <div className="col-span-1">
          <PerformanceChart />
        </div>

        {/* Feedback Pending */}
        <div className="col-span-1">
          <FeedbackPending />
        </div>
      </div>
    </div>
  );
};

export default Home;
