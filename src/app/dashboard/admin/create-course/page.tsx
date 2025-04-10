"use client";
import React, { useState } from "react";

const CreateCourse = () => {
  const [isPaid, setIsPaid] = useState(false);
  const [instructors, setInstructors] = useState([]);
  const [banner, setBanner] = useState(null);
  const [courseData, setCourseData] = useState({
    title: "",
    description: "",
    materials: "",
    durationHours: 0,
    durationMinutes: 0,
    category: "Choose Category",
    visibility: "Public",
    regularPrice: "",
    discountPrice: "",
  });

  const handleInstructorAdd = () => {
    setInstructors([
      ...instructors,
      { id: Date.now(), name: "", email: "", imageUrl: "" },
    ]);
  };

  const handleInstructorDelete = (id) => {
    setInstructors(instructors.filter((instructor) => instructor.id !== id));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBanner(URL.createObjectURL(file)); // Preview the banner image
    }
  };

  const handleSave = () => {
    // Combine all data into one object
    const dataToSave = {
      courseData,
      instructors,
      banner,
      isPaid,
    };
    
    // Log the combined object as a single JSON
    console.log("Course Data:", JSON.stringify(dataToSave, null, 2));
  };

  return (
    <div className="p-4 min-h-screen">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          <div className="text-2xl font-bold">Course Information</div>

          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Title</label>
            <input
              type="text"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter course title"
              value={courseData.title}
              onChange={(e) =>
                setCourseData({ ...courseData, title: e.target.value })
              }
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter course description"
              value={courseData.description}
              onChange={(e) =>
                setCourseData({ ...courseData, description: e.target.value })
              }
            />
          </div>

          {/* Duration */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Total Course Duration
            </label>
            <div className="flex space-x-2">
              <input
                type="number"
                className="w-16 p-2 border border-gray-300 rounded-md"
                placeholder="0"
                value={courseData.durationHours}
                onChange={(e) =>
                  setCourseData({
                    ...courseData,
                    durationHours: e.target.value,
                  })
                }
              />
              <span>hour(s)</span>
              <input
                type="number"
                className="w-16 p-2 border border-gray-300 rounded-md"
                placeholder="0"
                value={courseData.durationMinutes}
                onChange={(e) =>
                  setCourseData({
                    ...courseData,
                    durationMinutes: e.target.value,
                  })
                }
              />
              <span>min(s)</span>
            </div>
          </div>

          {/* Materials Included */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Materials Included
            </label>
            <textarea
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter materials included"
              value={courseData.materials}
              onChange={(e) =>
                setCourseData({ ...courseData, materials: e.target.value })
              }
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              value={courseData.category}
              onChange={(e) =>
                setCourseData({ ...courseData, category: e.target.value })
              }
            >
              <option>Choose Category</option>
              <option>Web Development</option>
              <option>Design</option>
              <option>Marketing</option>
            </select>
          </div>

          {/* Instructors */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Instructors
            </label>
            <div>
              <button
                type="button"
                className="bg-blue-500 text-white p-2 rounded-md"
                onClick={handleInstructorAdd}
              >
                Add Instructor
              </button>

              <div className="space-y-4 mt-4">
                {instructors.map((instructor) => (
                  <div key={instructor.id} className="flex items-center space-x-4">
                    <img
                      src={instructor.imageUrl || "/default-avatar.png"}
                      alt="Instructor"
                      className="w-12 h-12 rounded-full"
                    />
                    <div>
                      <input
                        type="text"
                        className="p-2 border border-gray-300 rounded-md"
                        placeholder="Instructor Name"
                      />
                      <input
                        type="email"
                        className="p-2 border border-gray-300 rounded-md mt-2"
                        placeholder="Instructor Email"
                      />
                    </div>
                    <button
                      type="button"
                      className="text-red-500"
                      onClick={() => handleInstructorDelete(instructor.id)}
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <div className="text-2xl font-bold">Course Settings</div>

          {/* Visibility */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Visibility
            </label>
            <select
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              value={courseData.visibility}
              onChange={(e) =>
                setCourseData({ ...courseData, visibility: e.target.value })
              }
            >
              <option>Public</option>
              <option>Pending</option>
              <option>Private</option>
            </select>
          </div>

          {/* Course Banner */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Course Banner
            </label>
            <input
              type="file"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              onChange={handleFileChange}
            />
            {banner && (
              <div className="mt-4">
                <img
                  src={banner}
                  alt="Banner Preview"
                  className="w-20 h-auto rounded-md object-cover"
                />
              </div>
            )}
          </div>

          {/* Pricing Model */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Pricing Model
            </label>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="free"
                  name="pricing"
                  value="free"
                  className="mr-2"
                  onChange={() => setIsPaid(false)}
                  checked={!isPaid}
                />
                <label htmlFor="free">Free</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="paid"
                  name="pricing"
                  value="paid"
                  className="mr-2"
                  onChange={() => setIsPaid(true)}
                  checked={isPaid}
                />
                <label htmlFor="paid">Paid</label>
              </div>
            </div>

            {isPaid && (
              <div className="space-y-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Regular Price
                  </label>
                  <input
                    type="number"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Enter regular price"
                    value={courseData.regularPrice}
                    onChange={(e) =>
                      setCourseData({ ...courseData, regularPrice: e.target.value })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Discount Price
                  </label>
                  <input
                    type="number"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Enter discount price"
                    value={courseData.discountPrice}
                    onChange={(e) =>
                      setCourseData({ ...courseData, discountPrice: e.target.value })
                    }
                  />
                </div>
              </div>
            )}
          </div>

          {/* Save Button */}
          <div>
            <button
              type="button"
              className="cursor-pointer inline-block px-8 py-2 text-sm font-medium text-white bg-indigo-600 border border-indigo-600 rounded-md hover:bg-indigo-800 hover:text-white transition-colors text-center"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCourse;
