"use client";
import React, { useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      name: 'John Doe',
      email: 'john.doe@example.com',
      registrationDate: '2025-01-15',
      coursesTaken: 2,
      role: 'student'
    },
    {
      id: 2,
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      registrationDate: '2025-02-20',
      coursesTaken: 0,
      role: 'instructor'
    },
    {
      id: 3,
      image: 'https://randomuser.me/api/portraits/men/3.jpg',
      name: 'Mike Johnson',
      email: 'mike.j@example.com',
      registrationDate: '2025-03-10',
      coursesTaken: 1,
      role: 'admin'
    }
  ]);

  const [selectedUser, setSelectedUser] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleViewUser = (user) => {
    setSelectedUser(user);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedUser(null);
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      {/* Users Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white shadow-sm rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Image</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Email</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Reg. Date</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Courses</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Role</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-4 py-3">
                  <img 
                    src={user.image} 
                    alt={user.name} 
                    className="w-10 h-10 rounded-full object-cover"
                  />
                </td>
                <td className="px-4 py-3 text-sm text-gray-600">{user.name}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{user.email}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{user.registrationDate}</td>
                <td className="px-4 py-3 text-sm text-gray-600">
                  {user.coursesTaken}
                </td>
                <td className="px-4 py-3 text-sm text-gray-600 capitalize">{user.role}</td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => handleViewUser(user)}
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
      {users.length === 0 && (
        <div className="text-center py-10">
          <p className="text-gray-500">No users found.</p>
        </div>
      )}

      {/* User Details Modal */}
      {modalOpen && selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">User Details</h2>
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
                  src={selectedUser.image}
                  alt={selectedUser.name}
                  className="w-24 h-24 rounded-full object-cover border-2 border-gray-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <p className="mt-1 px-3 py-2 bg-gray-100 rounded-md">{selectedUser.name}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <p className="mt-1 px-3 py-2 bg-gray-100 rounded-md break-all">{selectedUser.email}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Registration Date</label>
                <p className="mt-1 px-3 py-2 bg-gray-100 rounded-md">{selectedUser.registrationDate}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Courses Taken</label>
                <p className="mt-1 px-3 py-2 bg-gray-100 rounded-md">
                  {selectedUser.coursesTaken}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Role</label>
                <p className="mt-1 px-3 py-2 bg-gray-100 rounded-md capitalize">{selectedUser.role}</p>
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200"
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

export default Users;