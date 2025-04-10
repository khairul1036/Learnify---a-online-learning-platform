"use client"
import React, { useState } from 'react';

const Category = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: 'Technology', createDate: '2025-04-01', status: 'public' },
    { id: 2, name: 'Lifestyle', createDate: '2025-04-02', status: 'private' },
    { id: 3, name: 'Education', createDate: '2025-04-03', status: 'pending' },
  ]);
  
  const [newCategory, setNewCategory] = useState('');
  const [editCategory, setEditCategory] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const handleCreateCategory = () => {
    if (!newCategory.trim()) return;
    const newCat = {
      id: categories.length + 1,
      name: newCategory,
      createDate: new Date().toISOString().split('T')[0],
      status: 'pending'
    };
    setCategories([...categories, newCat]);
    setNewCategory('');
  };

  const handleStatusChange = (id, newStatus) => {
    setCategories(categories.map(category => 
      category.id === id ? { ...category, status: newStatus } : category
    ));
  };

  const handleDelete = (id) => {
    setCategories(categories.filter(category => category.id !== id));
  };

  const handleEdit = (category) => {
    setEditCategory({ ...category });
    setEditModalOpen(true);
  };

  const handleUpdateCategory = () => {
    if (!editCategory?.name.trim()) return;
    setCategories(categories.map(category => 
      category.id === editCategory.id ? { ...editCategory } : category
    ));
    setEditModalOpen(false);
    setEditCategory(null);
  };

  const handleCloseModal = () => {
    setEditModalOpen(false);
    setEditCategory(null);
  };

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6">
      {/* Create Category Section */}
      <div className="mb-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="Enter category name"
          className="w-full sm:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleCreateCategory}
          className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Create Category
        </button>
      </div>

      {/* Categories Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white shadow-sm rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Create Date</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) => (
              <tr key={category.id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-600">{category.name}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{category.createDate}</td>
                <td className="px-4 py-3">
                  <select
                    value={category.status}
                    onChange={(e) => handleStatusChange(category.id, e.target.value)}
                    className="w-full sm:w-32 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  >
                    <option value="public">Public</option>
                    <option value="pending">Pending</option>
                    <option value="private">Private</option>
                  </select>
                </td>
                <td className="px-4 py-3 flex gap-2">
                  <button
                    onClick={() => handleEdit(category)}
                    className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors duration-200 text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(category.id)}
                    className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-200 text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Empty State */}
      {categories.length === 0 && (
        <div className="text-center py-10">
          <p className="text-gray-500">No categories found. Create one to get started!</p>
        </div>
      )}

      {/* Edit Modal */}
      {editModalOpen && (
        <div className="fixed inset-0 bg-gray-800/90 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">Edit Category</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Category Name</label>
                <input
                  type="text"
                  value={editCategory?.name || ''}
                  onChange={(e) => setEditCategory({ ...editCategory, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select
                  value={editCategory?.status || 'pending'}
                  onChange={(e) => setEditCategory({ ...editCategory, status: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="public">Public</option>
                  <option value="pending">Pending</option>
                  <option value="private">Private</option>
                </select>
              </div>
            </div>
            <div className="mt-6 flex justify-end gap-2">
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handleUpdateCategory}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Category;