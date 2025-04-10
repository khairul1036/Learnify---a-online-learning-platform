import { Clock, User, Edit, MoreHorizontal, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const MyCoursesCard = ({ title, students, hours, price, bannerUrl, createDate }) => {
  
  // Function to format date into "Month Day, Year, Time" (e.g., "January 12, 2024, 3:00 PM")
  const formatDate = (date) => {
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: true, // To get AM/PM format
    };
    const formattedDate = new Date(date).toLocaleDateString('en-US', options);
    return formattedDate;
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden max-w-xs w-full mx-auto">
      {/* Banner Image */}
      <div className="relative h-40">
        <Image 
          src={bannerUrl} 
          alt="Course Banner" 
          layout="fill" 
          objectFit="cover" 
          className="rounded-t-lg"
        />
      </div>

      {/* Course Info */}
      <div className="p-4">

        {/* Create Date */}
        <p className="text-sm text-gray-500">{formatDate(createDate)}</p>

        {/* Course Title */}
        <h3 className="text-xl font-semibold text-gray-800 truncate">{title}</h3>

        {/* Course Details */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mt-2">
            <div className="flex items-center text-sm text-gray-600 mb-4">
                <span className="mr-1"><User className="w-4 h-4" /> </span>
                <span>{students}</span>
            </div>

            <div className="flex items-center text-sm text-gray-600 mb-4">
                <span className="mr-1"><Clock className="w-4 h-4" /> </span>
                <span>{hours}</span>
            </div>
        </div>

        {/* Price & Discount */}
        <div className="flex justify-between items-center mt-2">
            <div>     
                <span className="text-xl font-semibold text-indigo-600 mr-2">৳{price}</span>
                <span className="text-sm text-gray-500 line-through">৳99.99</span>
            </div>
            <div className="flex items-center text-yellow-400">
                <Star className="w-5 h-5" />
                <span className="ml-1 text-sm text-gray-600">4.5(15)</span>
            </div>
        </div>


        {/* Actions */}
        <div className="flex justify-between items-center mt-4 gap-5">
            <Link href={"/"} className="w-full cursor-pointer inline-block px-6 py-2 text-sm font-medium text-indigo-600 bg-white border border-indigo-600 rounded-md hover:bg-indigo-600 hover:text-white transition-colors text-center"><button >Go Course</button></Link>
          {/* Edit Icon */}
          <Link href={"/"}>
          <Edit className="w-8 h-8 text-gray-600 cursor-pointer hover:text-indigo-600" />
          </Link>

          {/* More (3-dot) Icon */}
          {/* <MoreHorizontal className="w-5 h-5 text-gray-600 cursor-pointer" /> */}
        </div>
      </div>
    </div>
  );
};

export default MyCoursesCard;
