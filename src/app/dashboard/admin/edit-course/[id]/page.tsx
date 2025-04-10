"use client";
import React, { useState, useEffect } from 'react';

const EditCourse = ({ courseId }) => {
  // Sample initial data - in a real app, you would fetch this based on courseId
  const [initialData] = useState({
    title: "Advanced React Development",
    description: "Learn advanced React patterns and best practices",
    materials: "PDF guides, starter code, quizzes",
    durationHours: 5,
    durationMinutes: 30,
    category: "Web Development",
    visibility: "Public",
    isPaid: true,
    regularPrice: "99.99",
    discountPrice: "79.99",
    instructors: [
      {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        imageUrl: "/instructor1.jpg"
      }
    ],
    bannerUrl: "/course-banner.jpg"
  });

  const [isPaid, setIsPaid] = useState(initialData.isPaid);
  const [instructors, setInstructors] = useState(initialData.instructors);
  const [banner, setBanner] = useState(initialData.bannerUrl);
  const [courseData, setCourseData] = useState({
    title: initialData.title,
    description: initialData.description,
    materials: initialData.materials,
    durationHours: initialData.durationHours,
    durationMinutes: initialData.durationMinutes,
    category: initialData.category,
    visibility: initialData.visibility,
    regularPrice: initialData.regularPrice,
    discountPrice: initialData.discountPrice,
  });

  // In a real app, you would fetch the course data when component mounts
  useEffect(() => {
    // fetchCourseData(courseId).then(data => {
    //   setCourseData(data);
    //   setIsPaid(data.isPaid);
    //   setInstructors(data.instructors);
    //   setBanner(data.bannerUrl);
    // });
  }, [courseId]);

  const handleInstructorAdd = () => {
    setInstructors([
      ...instructors,
      { id: Date.now(), name: "", email: "", imageUrl: "" },
    ]);
  };

  const handleInstructorDelete = (id) => {
    setInstructors(instructors.filter((instructor) => instructor.id !== id));
  };

  const handleInstructorChange = (id, field, value) => {
    setInstructors(instructors.map(instructor => 
      instructor.id === id ? { ...instructor, [field]: value } : instructor
    ));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBanner(URL.createObjectURL(file));
    }
  };

  const handleUpdate = () => {
    // Combine all data into one object
    const dataToUpdate = {
      ...courseData,
      instructors,
      bannerUrl: banner,
      isPaid,
    };
    
    console.log("Updated Course Data:", JSON.stringify(dataToUpdate, null, 2));
    // In a real app: 
    // updateCourse(courseId, dataToUpdate).then(() => {
    //   alert("Course updated successfully!");
    // });
    alert("Course updated successfully!");
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Edit Course</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-gray-800">Course Information</div>

            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={courseData.title}
                onChange={(e) =>
                  setCourseData({ ...courseData, title: e.target.value })
                }
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                rows={4}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={courseData.description}
                onChange={(e) =>
                  setCourseData({ ...courseData, description: e.target.value })
                }
              />
            </div>

            {/* Duration */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Total Course Duration
              </label>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    className="w-20 p-2 border border-gray-300 rounded-md"
                    value={courseData.durationHours}
                    onChange={(e) =>
                      setCourseData({
                        ...courseData,
                        durationHours: e.target.value,
                      })
                    }
                  />
                  <span>hours</span>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="number"
                    className="w-20 p-2 border border-gray-300 rounded-md"
                    value={courseData.durationMinutes}
                    onChange={(e) =>
                      setCourseData({
                        ...courseData,
                        durationMinutes: e.target.value,
                      })
                    }
                  />
                  <span>minutes</span>
                </div>
              </div>
            </div>

            {/* Materials Included */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Materials Included
              </label>
              <textarea
                rows={3}
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={courseData.materials}
                onChange={(e) =>
                  setCourseData({ ...courseData, materials: e.target.value })
                }
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={courseData.category}
                onChange={(e) =>
                  setCourseData({ ...courseData, category: e.target.value })
                }
              >
                <option value="Web Development">Web Development</option>
                <option value="Design">Design</option>
                <option value="Marketing">Marketing</option>
                <option value="Business">Business</option>
                <option value="Photography">Photography</option>
              </select>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-gray-800">Course Settings</div>

            {/* Visibility */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Visibility
              </label>
              <select
                className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={courseData.visibility}
                onChange={(e) =>
                  setCourseData({ ...courseData, visibility: e.target.value })
                }
              >
                <option value="Public">Public</option>
                <option value="Private">Private</option>
                <option value="Draft">Draft</option>
              </select>
            </div>

            {/* Course Banner */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Course Banner
              </label>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <input
                    type="file"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={handleFileChange}
                    accept="image/*"
                  />
                  <button
                    type="button"
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
                  >
                    Change Banner
                  </button>
                </div>
                {banner && (
                  <img
                    src={banner}
                    alt="Course Banner"
                    className="w-24 h-24 object-cover rounded-md"
                  />
                )}
              </div>
            </div>

            {/* Pricing Model */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Pricing Model
              </label>
              <div className="flex items-center space-x-6 mb-4">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 text-blue-600"
                    checked={!isPaid}
                    onChange={() => setIsPaid(false)}
                  />
                  <span className="ml-2">Free</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio h-5 w-5 text-blue-600"
                    checked={isPaid}
                    onChange={() => setIsPaid(true)}
                  />
                  <span className="ml-2">Paid</span>
                </label>
              </div>

              {isPaid && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Regular Price ($)
                    </label>
                    <input
                      type="number"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={courseData.regularPrice}
                      onChange={(e) =>
                        setCourseData({ ...courseData, regularPrice: e.target.value })
                      }
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Discount Price ($)
                    </label>
                    <input
                      type="number"
                      className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      value={courseData.discountPrice}
                      onChange={(e) =>
                        setCourseData({ ...courseData, discountPrice: e.target.value })
                      }
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Instructors */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Instructors
              </label>
              <button
                type="button"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 mb-4"
                onClick={handleInstructorAdd}
              >
                Add Instructor
              </button>

              <div className="space-y-4">
                {instructors.map((instructor) => (
                  <div key={instructor.id} className="flex items-start space-x-4 p-3 border border-gray-200 rounded-md">
                    <div className="flex-shrink-0">
                      <img
                        src={instructor.imageUrl || "/default-avatar.png"}
                        alt="Instructor"
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    </div>
                    <div className="flex-grow space-y-2">
                      <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Instructor Name"
                        value={instructor.name}
                        onChange={(e) => handleInstructorChange(instructor.id, 'name', e.target.value)}
                      />
                      <input
                        type="email"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        placeholder="Instructor Email"
                        value={instructor.email}
                        onChange={(e) => handleInstructorChange(instructor.id, 'email', e.target.value)}
                      />
                    </div>
                    <button
                      type="button"
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleInstructorDelete(instructor.id)}
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Update Button */}
            <div className="pt-4">
              <button
                type="button"
                className="w-full px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors"
                onClick={handleUpdate}
              >
                Update Course
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCourse;