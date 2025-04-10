// components/AllCourse.js
import { Edit, SquarePlus , ListPlus, Trash2} from 'lucide-react';
import Link from 'next/link';

const AllCourse = () => {
  const courses = [
    {
      id: 1,
      bannerUrl: 'https://campustechnology.com/-/media/EDU/CampusTechnology/2019-Images/20191209online.jpg',
      name: 'Batch-2.1 | C Programming & Problem Solving',
      category: 'Development',
      instructor: { image: 'https://campustechnology.com/-/media/EDU/CampusTechnology/2019-Images/20191209online.jpg', name: 'John Doe' },
      price: { regular: '$99.99', discount: '$49.99' },
      createDate: '2025-07-11T16:50:00',
      status: 'Publish',
    },
    {
      id: 2,
      bannerUrl: 'https://campustechnology.com/-/media/EDU/CampusTechnology/2019-Images/20191209online.jpg',
      name: 'Advanced JavaScript',
      category: 'Development',
      instructor: { image: 'https://campustechnology.com/-/media/EDU/CampusTechnology/2019-Images/20191209online.jpg', name: 'Jane Smith' },
      price: { regular: '$129.99', discount: '$79.99' },
      createDate: '2025-06-25T14:30:00',
      status: 'Pending',
    },
    // More course objects can go here
  ];

  // Function to format date as "Month Day, Year, Time"
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
    <div className="container mx-auto p-4">
      <div className='flex justify-between items-center pb-5'>
        <h1 className="text-2xl font-semibold mb-4">All Courses</h1>
        <Link href={"/dashboard/admin/create-course"} className="cursor-pointer inline-block px-8 py-2 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-800 hover:text-white transition-colors text-center"><button className='cursor-pointer flex items-center gap-2'><SquarePlus />Create Course</button></Link>
      </div>
      <div className='overflow-auto'>
      <table className="min-w-[900px] w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="px-4 py-2">Banner</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Category</th>
            <th className="px-4 py-2">Instructor</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Create Date</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course) => (
            <tr key={course.id} className="border-b">
              <td className="px-4 py-2">
                <img src={course.bannerUrl} alt={course.name} className="w-20 h-16 object-cover rounded" />
              </td>
              <td className="px-4 py-2 hover:text-indigo-600"><Link href={"/course-details/1234"}>{course.name}</Link></td>
              <td className="px-4 py-2">{course.category}</td>
              <td className="px-4 py-2 flex items-center space-x-2">
                <img src={course.instructor.image} alt={course.instructor.name} className="w-8 h-8 object-cover rounded-full" />
                <span>{course.instructor.name}</span>
              </td>
              <td className="px-4 py-2">
                <span className="line-through text-gray-500">{course.price.regular}</span> <br />
                <span className="text-indigo-600 font-semibold">{course.price.discount}</span>
              </td>
              <td className="px-4 py-2 text-sm">{formatDate(course.createDate)}</td>
              <td className="px-4 py-2">
                <select
                  className="border border-gray-300 rounded-md px-2 py-1"
                  defaultValue={course.status}
                >
                  <option value="Publish">Publish</option>
                  <option value="Private">Private</option>
                  <option value="Pending">Pending</option>
                </select>
              </td>
              <td className="px-4 py-2 flex justify-between items-center space-x-2 relative">
                {/* Add Topic Icon */}
                <Link href={"/dashboard/add-modules/1"} className="relative group">
                  <ListPlus className="w-8 h-8 text-gray-600 cursor-pointer hover:text-indigo-600" />
                  {/* Tooltip for Add Topic */}
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 text-xs text-white bg-gray-800 rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Modules
                  </span>
                </Link>

                {/* Edit Icon */}
                <Link href={"/dashboard/admin/edit-course/1"} className="relative group">
                  <Edit className="w-6 h-6 text-gray-600 cursor-pointer hover:text-indigo-600" />
                  {/* Tooltip for Edit */}
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 text-xs text-white bg-gray-800 rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Edit
                  </span>
                </Link>

                {/* Delete Icon */}
                <Link href={"#"} className="relative group">
                  <Trash2 className="w-6 h-6 text-gray-600 cursor-pointer hover:text-red-600" />
                  {/* Tooltip for Delete */}
                  <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 text-xs text-white bg-red-600 rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Delete
                  </span>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default AllCourse;
