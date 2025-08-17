import React from "react";

interface Lesson {
  date: string;
  time: string;
  course: string;
  student: string;
}

const lessons: Lesson[] = [
  {
    date: "21 July",
    time: "2:00 - 3:00 Pm",
    course: "Introduction to Piano",
    student: "Eunice Robot & Arnold Hayes",
  },
  {
    date: "22 July",
    time: "4:00 - 5:00 Pm",
    course: "Finger Warmups",
    student: "Eunice Robot & Arnold Hayes",
  },
  {
    date: "23 July",
    time: "3:00 - 4:00 Pm",
    course: "Simple Chords",
    student: "Eunice Robot & Arnold Hayes",
  },
  {
    date: "24 July",
    time: "5:00 - 6:00 Pm",
    course: "Rhythm Basics",
    student: "Eunice Robot & Arnold Hayes",
  },
  {
    date: "25 July",
    time: "2:00 - 3:00 Pm",
    course: "Simple Melodies",
    student: "Eunice Robot & Arnold Hayes",
  },
  {
    date: "26 July",
    time: "7:00 - 8:00 Pm",
    course: "Treble & Bass Clef",
    student: "Eunice Robot & Arnold Hayes",
  },
  {
    date: "24 July",
    time: "5:00 - 6:00 Pm",
    course: "Rhythm Basics",
    student: "Eunice Robot & Arnold Hayes",
  }
];

const UpcomingLessons: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">
            Upcoming Lessons
          </h2>
          <button className="text-sm text-purple-600 hover:text-purple-800 font-medium">
            View All
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">
                Date
              </th>
              <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">
                Time
              </th>
              <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">
                Course
              </th>
              <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">
                Student Name
              </th>
            </tr>
          </thead>
          <tbody>
            {lessons.map((lesson, index) => (
              <tr
                key={index}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                <td className="py-4 px-6 text-sm text-gray-900">
                  {lesson.date}
                </td>
                <td className="py-4 px-6 text-sm text-gray-600">
                  {lesson.time}
                </td>
                <td className="py-4 px-6 text-sm text-gray-900">
                  {lesson.course}
                </td>
                <td className="py-4 px-6 text-sm text-gray-600">
                  {lesson.student}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UpcomingLessons;
