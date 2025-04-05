// components/EnrolledCourseCard.js
import React from 'react';
import { Star } from 'lucide-react';

const EnrolledCourseCard = () => {
  const course = {
    bannerImage: "https://images.all-free-download.com/images/graphiclarge/language_course_banner_template_elegant_realistic_boy_6932480.jpg",  // Replace with actual image URL or path
    title: "Web Development Masterclass",
    rating: 4.5,
    progress: 10,  // 10% progress
  };

  return (
    <div className="max-w-sm w-full bg-white rounded-lg overflow-hidden border">
      {/* Course Banner */}
      <div className="w-full h-48 bg-gray-200">
        <img 
          src={course.bannerImage} 
          alt={course.title} 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Course Info (Title & Rating) */}
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800">{course.title}</h3>
        <div className="flex items-center space-x-2 mt-2">
        <Star className="w-5 h-5 text-yellow-500" />
          <span className="text-gray-600">{course.rating}</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="px-4 py-2">
        <p className="text-gray-600">Progress</p>
        <div className="w-full bg-gray-300 rounded-full h-2.5">
          <div 
            className="bg-indigo-500 h-2.5 rounded-full"
            style={{ width: `${course.progress}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-xs mt-1">
          <span>0%</span>
          <span>100%</span>
        </div>
      </div>

      {/* Start Learning Button */}
      <div className="px-4 py-4">
        <button className="w-full cursor-pointer inline-block px-6 py-2 text-sm font-medium text-indigo-600 bg-white border border-indigo-600 rounded-md hover:bg-indigo-600 hover:text-white transition-colors">
          Start Learning
        </button>
      </div>
    </div>
  );
};

export default EnrolledCourseCard;
