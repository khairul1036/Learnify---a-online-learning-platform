"use client";
import React, { useState } from 'react';

const InstructorReq = () => {
  const [instructors, setInstructors] = useState([
    {
      id: 1,
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      name: 'John Doe',
      email: 'john.doe@example.com',
      registrationDate: '2025-01-15',
      totalCourses: 3,
      status: 'pending',
      bio: 'Experienced web developer with 5+ years in the industry',
      phone: '+1-555-0123',
      location: 'New York, USA',
      socialLinks: {
        linkedin: 'linkedin.com/in/johndoe',
        twitter: 'twitter.com/johndoe'
      }
    },
    {
      id: 2,
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      registrationDate: '2025-02-20',
      totalCourses: 5,
      status: 'approved',
      bio: 'Passionate educator specializing in programming',
      phone: '+1-555-0124',
      location: 'London, UK',
      socialLinks: {
        linkedin: 'linkedin.com/in/janesmith',
        twitter: 'twitter.com/janesmith'
      }
    }
  ]);

  const [selectedInstructor, setSelectedInstructor] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleStatusChange = (id, newStatus) => {
    setInstructors(instructors.map(instructor => 
      instructor.id === id ? { ...instructor, status: newStatus } : instructor
    ));
  };

  const handleViewInstructor = (instructor) => {
    setSelectedInstructor(instructor);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedInstructor(null);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      {/* Instructors Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white shadow-sm rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Image</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Email</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Reg. Date</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Total Courses</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody>
            {instructors.map((instructor) => (
              <tr key={instructor.id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-4 py-3">
                  <img 
                    src={instructor.image} 
                    alt={instructor.name} 
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">{instructor.name}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{instructor.email}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{instructor.registrationDate}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{instructor.totalCourses}</td>
                <td className="px-4 py-3">
                  <select
                    value={instructor.status}
                    onChange={(e) => handleStatusChange(instructor.id, e.target.value)}
                    className="w-full sm:w-32 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  >
                    <option value="approved">Approved</option>
                    <option value="pending">Pending</option>
                  </select>
                </td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => handleViewInstructor(instructor)}
                    className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm"
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Empty State */}
      {instructors.length === 0 && (
        <div className="text-center py-10">
          <p className="text-gray-500">No instructor requests found.</p>
        </div>
      )}

      {/* Instructor Details Modal */}
      {modalOpen && selectedInstructor && (
        <div className="fixed inset-0 bg-gray-800/90 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Instructor Details</h2>
              <button
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex justify-center">
                <img
                  src={selectedInstructor.image}
                  alt={selectedInstructor.name}
                  className="w-24 h-24 rounded-full object-cover border-2 border-gray-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <p className="mt-1 px-3 py-2 bg-gray-100 rounded-md">{selectedInstructor.name}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <p className="mt-1 px-3 py-2 bg-gray-100 rounded-md break-all">{selectedInstructor.email}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Registration Date</label>
                <p className="mt-1 px-3 py-2 bg-gray-100 rounded-md">{selectedInstructor.registrationDate}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Total Courses</label>
                <p className="mt-1 px-3 py-2 bg-gray-100 rounded-md">{selectedInstructor.totalCourses}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Status</label>
                <p className="mt-1 px-3 py-2 bg-gray-100 rounded-md capitalize">{selectedInstructor.status}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Bio</label>
                <p className="mt-1 px-3 py-2 bg-gray-100 rounded-md">{selectedInstructor.bio}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <p className="mt-1 px-3 py-2 bg-gray-100 rounded-md">{selectedInstructor.phone}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Location</label>
                <p className="mt-1 px-3 py-2 bg-gray-100 rounded-md">{selectedInstructor.location}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Social Links</label>
                <div className="mt-1 space-y-2">
                  <p className="px-3 py-2 bg-gray-100 rounded-md">
                    LinkedIn: 
                    <a 
                      href={`https://${selectedInstructor.socialLinks.linkedin}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline ml-1"
                    >
                      {selectedInstructor.socialLinks.linkedin}
                    </a>
                  </p>
                  <p className="px-3 py-2 bg-gray-100 rounded-md">
                    Twitter: 
                    <a 
                      href={`https://${selectedInstructor.socialLinks.twitter}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline ml-1"
                    >
                      {selectedInstructor.socialLinks.twitter}
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InstructorReq;