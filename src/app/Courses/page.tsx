"use client";
import React, { useState } from "react";
import coursesData from "../../../public/assets/courses.json";

interface Course {
  id: number;
  name: string;
  description: string;
  duration: string;
  price: string;
}

const CoursesPage = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | undefined>(coursesData[0]);

  const handleCourseSelect = (courseId: number) => {
    const course = coursesData.find((course) => course.id === courseId);
    setSelectedCourse(course);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50 text-gray-800 pt-[100px]">
      {/* Sidebar: Course List */}
      <aside className="w-full md:w-1/3 bg-white shadow-md md:sticky md:top-[80px] md:h-[calc(100vh-80px)] overflow-y-auto p-6 pb-10">
        <h2 className="text-2xl font-bold mb-6">All Courses</h2>
        <div className="space-y-4">
          {coursesData.map((course) => (
            <div
              key={course.id}
              onClick={() => handleCourseSelect(course.id)}
              className={`cursor-pointer p-5 rounded-xl transition-all duration-300 border hover:shadow-md ${
                selectedCourse?.id === course.id
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-200 bg-white"
              }`}
            >
              <h3 className="text-lg font-semibold">{course.name}</h3>
              <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                {course.description}
              </p>
            </div>
          ))}
        </div>
      </aside>

      {/* Main: Course Details */}
      <main className="w-full md:w-2/3 p-6 sm:p-10">
        {selectedCourse ? (
          <div className="bg-white p-6 rounded-xl shadow-md transition-all duration-300">
            <h2 className="text-3xl font-bold text-[#222B57] mb-2">{selectedCourse.name}</h2>
            <hr className="border-t border-gray-300 mb-4" />
            <p className="text-gray-700 leading-relaxed text-base">
              {selectedCourse.description}
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-800 text-base">
              <p>
                <strong className="text-gray-900">📅 Duration:</strong> {selectedCourse.duration}
              </p>
              <p>
                <strong className="text-gray-900">💰 Price:</strong> {selectedCourse.price}
              </p>
            </div>

            <div className="mt-8">
              <a
                href="/enroll"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-base font-semibold transition duration-300 shadow-md"
              >
                Enroll Now
              </a>
            </div>
          </div>
        ) : (
          <div className="text-gray-500 text-lg">
            Please select a course to view its details.
          </div>
        )}
      </main>
    </div>
  );
};

export default CoursesPage;
