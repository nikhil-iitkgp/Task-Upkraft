# Upkraft Dashboard - Frontend Developer Intern Assignment

A modern, responsive React dashboard application built for Upkraft's Frontend Developer Intern position. This project replicates the provided design with pixel-perfect accuracy using industry best practices.

## 🚀 Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Component Architecture**: Modular, reusable components
- **State Management**: React hooks
- **Development**: Hot reload with Vite dev server

## 📱 Features

### Dashboard Components

- **Sidebar Navigation**: Purple gradient sidebar with active states and responsive design
- **Header**: Enhanced with search functionality, custom Telegram logo, and user profile section
- **Profile Card**: Teacher profile with stats (Students, Courses, Rewards)
- **Statistics Cards**: Optimized key metrics display with full-height layout
- **Upcoming Lessons Table**: Comprehensive lesson scheduling display
- **Performance Charts**: Circular progress indicators for course and student performance
- **Refer & Earn Section**: Compact promotional component with full-width image and call-to-action
- **Feedback Pending**: Pending feedback counter with action button

### Recent Improvements

- **Enhanced Layout**: Stats cards now take full first-row height with proper spacing
- **Optimized Refer & Earn**: Reduced height for better proportion and visual balance
- **Custom Telegram Logo**: Integrated purple Telegram logo for brand consistency
- **Responsive Grid**: Improved grid layout with flex containers for better height distribution
- **Visual Polish**: Better spacing, margins, and component proportions

### Design Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Modern UI**: Clean, professional interface matching Upkraft's brand
- **Interactive Elements**: Hover states, transitions, and smooth animations
- **Accessibility**: Proper ARIA labels and semantic HTML structure
- **Component-Based Architecture**: Reusable, maintainable code structure

## 🛠 Installation & Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager

### Quick Start

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start development server**

   ```bash
   npm run dev
   ```

3. **Open in browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/           # Reusable React components
│   ├── ui/              # Base UI components
│   │   └── Button.tsx   # Reusable button component
│   ├── Sidebar.tsx      # Main navigation sidebar
│   ├── Header.tsx       # Top header with search, telegram logo, and profile
│   ├── ProfileCard.tsx  # Teacher profile card
│   ├── StatsCard.tsx    # Statistics display card (optimized for full height)
│   ├── UpcomingLessons.tsx # Lessons table component
│   ├── PerformanceChart.tsx # Performance visualization
│   ├── CircularProgress.tsx # Circular progress indicator
│   ├── SemiCircularProgress.tsx # Semi-circular progress component
│   ├── ReferAndEarn.tsx # Referral promotion component (compact design)
│   └── FeedbackPending.tsx # Feedback management component
├── pages/               # Page components
│   ├── Home.tsx        # Main dashboard page (optimized layout)
│   ├── MyStudents.tsx  # Students management page
│   ├── MyCourses.tsx   # Courses management page
│   ├── Calendar.tsx    # Calendar view page
│   ├── Assignment.tsx  # Assignment management page
│   ├── MusicLibrary.tsx # Music library page
│   ├── PracticeStudio.tsx # Practice studio page
│   ├── PaymentSummary.tsx # Payment summary page
│   ├── ReferAndEarnPage.tsx # Dedicated referral page
│   └── Settings.tsx    # Settings page
├── lib/
│   └── utils.ts         # Utility functions (className merger)
├── App.tsx              # Main application component with routing
├── main.tsx            # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## 🎯 Assignment Requirements Fulfilled

- ✅ **React.js**: Built with modern React and TypeScript
- ✅ **Clean Code**: Component-based architecture with separation of concerns
- ✅ **Responsive Design**: Mobile-first responsive design with optimized layouts
- ✅ **Industry Best Practices**: Following React and frontend development standards
- ✅ **Production Ready**: Optimized build, proper error handling, and accessibility
- ✅ **MERN Stack Ready**: Frontend prepared for backend integration
- ✅ **Maintainable**: Well-structured codebase with clear component hierarchy

## 📊 Features Matching Original Design

✅ **Exact Layout**: Pixel-perfect recreation with enhanced proportions  
✅ **Color Scheme**: Matching purple gradient and color palette  
✅ **Typography**: Inter font family with proper weights  
✅ **Icons**: Lucide React icons + custom Telegram logo  
✅ **Responsive**: Works on all device sizes  
✅ **Interactive**: Hover states and smooth transitions  
✅ **Data Display**: Proper formatting of numbers and percentages  
✅ **Navigation**: Complete sidebar with all menu items  
✅ **Tables**: Styled lesson scheduling table  
✅ **Charts**: Circular and semi-circular progress indicators  
✅ **Layout Optimization**: Full-height stats cards and compact components

## 🔧 Development Notes

- Built using Vite for fast development and optimized builds
- Tailwind CSS for rapid styling and consistent design system
- TypeScript for type safety and better developer experience
- Modular component architecture for easy maintenance and scalability
- Responsive grid system with flexbox for optimal layout distribution

Built with ❤️ for Upkraft Frontend Developer Intern position.
