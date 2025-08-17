import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

// Import all pages
import Home from "./pages/Home";
import MyStudents from "./pages/MyStudents";
import MyCourses from "./pages/MyCourses";
import Calendar from "./pages/Calendar";
import Assignment from "./pages/Assignment";
import MusicLibrary from "./pages/MusicLibrary";
import PracticeStudio from "./pages/PracticeStudio";
import PaymentSummary from "./pages/PaymentSummary";
import ReferAndEarnPage from "./pages/ReferAndEarnPage";
import Settings from "./pages/Settings";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("home");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleItemClick = (key: string) => {
    setActiveItem(key);
  };

  const renderMainContent = () => {
    switch (activeItem) {
      case "home":
        return <Home />;
      case "my-students":
        return <MyStudents />;
      case "my-courses":
        return <MyCourses />;
      case "calendar":
        return <Calendar />;
      case "assignment":
        return <Assignment />;
      case "music-library":
        return <MusicLibrary />;
      case "practice-studio":
        return <PracticeStudio />;
      case "payment-summary":
        return <PaymentSummary />;
      case "refer-earn":
        return <ReferAndEarnPage />;
      case "settings":
        return <Settings />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        activeItem={activeItem}
        onItemClick={handleItemClick}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header onMenuToggle={toggleSidebar} />

        {/* Dashboard Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
          <div className="max-w-full">{renderMainContent()}</div>
        </main>
      </div>
    </div>
  );
}

export default App;
