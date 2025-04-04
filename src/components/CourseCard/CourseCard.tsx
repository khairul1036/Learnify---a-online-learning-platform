import React from 'react';
import { Star, Clock, User } from 'lucide-react';
import Link from 'next/link';

const CourseCard = () => {
    return (       
        <div className="group bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden transition-all">
          <img
            src="https://campustechnology.com/-/media/EDU/CampusTechnology/2019-Images/20191209online.jpg"
            alt="Course Image"
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="p-6">
            <Link href={'/course-details/1234'}>
                {/* Title and Rating */}
                <h3 className="text-xl font-semibold">Batch-2 | C Programming & Problem Solving</h3>
                
                {/* Total Enrolled & Duration */}
                <div className="flex justify-between items-center mt-2 text-gray-500 text-sm">
                <div className="flex items-center">
                    <span className="mr-1"><User className="w-4 h-4" /> </span>
                    <span>350</span>
                </div>
                <div className="flex items-center">
                    <Clock className="w-4 h-4" />
                    <span className="ml-1">2 hours</span>
                </div>
                </div>
            
                {/* Tutor Info */}
                <div className="flex items-center mt-4 border-b pb-2">
                <img
                    src="https://campustechnology.com/-/media/EDU/CampusTechnology/2019-Images/20191209online.jpg"
                    alt="Tutor"
                    className="w-8 h-8 rounded-full border-2 border-indigo-600"
                />
                <span className="ml-2 text-sm text-gray-600">by <span className='text-gray-800'>John Doe</span></span>
                </div>

                {/* Price & Discount */}
                <div className="flex justify-between items-center mt-2">
                    <div>     
                        <span className="text-xl font-semibold text-indigo-600 mr-2">৳59.99</span>
                        <span className="text-sm text-gray-500 line-through">৳99.99</span>
                    </div>
                <div className="flex items-center text-yellow-400">
                    <Star className="w-5 h-5" />
                    <span className="ml-1 text-sm text-gray-600">4.5(15)</span>
                </div>
                </div>
            </Link>
            {/* Enroll Button */}
            <div className="mt-4">
              <Link
                href={"/checkout"}
                className="w-full text-center inline-block px-6 py-2 text-indigo-600 bg-white border border-indigo-600 rounded-md hover:bg-indigo-600 hover:text-white transition-colors"
              >
                Enroll Now
              </Link>
            </div>
          </div>
        </div>
    );
};

export default CourseCard;