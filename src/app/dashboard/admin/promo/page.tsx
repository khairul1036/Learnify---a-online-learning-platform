"use client";
import React, { useState } from 'react';

const Promo = () => {
  const [promos, setPromos] = useState([
    { id: 1, name: 'SUMMER25', uses: 8, maxUses: 10, discountPercentage: 25, validUntil: '2025-06-30T23:59' },
    { id: 2, name: 'WELCOME10', uses: 5, maxUses: 10, discountPercentage: 10, validUntil: '2025-12-31T23:59' },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [promoData, setPromoData] = useState({
    id: null,
    name: '',
    discountPercentage: '',
    validUntil: '',
    maxUses: ''
  });

  const handleOpenCreateModal = () => {
    setEditMode(false);
    setPromoData({ id: null, name: '', discountPercentage: '', validUntil: '', maxUses: '' });
    setModalOpen(true);
  };

  const handleOpenEditModal = (promo) => {
    setEditMode(true);
    setPromoData({ ...promo });
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setEditMode(false);
    setPromoData({ id: null, name: '', discountPercentage: '', validUntil: '', maxUses: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPromoData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!promoData.name || !promoData.discountPercentage || !promoData.validUntil || !promoData.maxUses) {
      alert('Please fill all fields');
      return;
    }

    const promo = {
      id: editMode ? promoData.id : promos.length + 1,
      name: promoData.name.toUpperCase(),
      uses: editMode ? promos.find(p => p.id === promoData.id).uses : 0,
      maxUses: parseInt(promoData.maxUses),
      discountPercentage: parseInt(promoData.discountPercentage),
      validUntil: promoData.validUntil
    };

    if (editMode) {
      setPromos(promos.map(p => p.id === promo.id ? promo : p));
    } else {
      setPromos([...promos, promo]);
    }
    handleCloseModal();
  };

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this promo?')) {
      setPromos(promos.filter(promo => promo.id !== id));
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6">
      {/* Create Promo Button */}
      <div className="mb-6">
        <button
          onClick={handleOpenCreateModal}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
        >
          Create Promo
        </button>
      </div>

      {/* Promos Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white shadow-sm rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Promo Name</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Uses</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Max Uses</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Discount %</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {promos.map((promo) => (
              <tr key={promo.id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-600">{promo.name}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{promo.uses}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{promo.maxUses}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{promo.discountPercentage}%</td>
                <td className="px-4 py-3 flex gap-2">
                  <button
                    onClick={() => handleOpenEditModal(promo)}
                    className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors duration-200 text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(promo.id)}
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
      {promos.length === 0 && (
        <div className="text-center py-10">
          <p className="text-gray-500">No promos found. Create one to get started!</p>
        </div>
      )}

      {/* Promo Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-gray-800/90 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {editMode ? 'Edit Promo' : 'Create New Promo'}
              </h2>
              <button
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Promo Name</label>
                <input
                  type="text"
                  name="name"
                  value={promoData.name}
                  onChange={handleInputChange}
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., SUMMER25"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Discount Percentage</label>
                <input
                  type="number"
                  name="discountPercentage"
                  value={promoData.discountPercentage}
                  onChange={handleInputChange}
                  min="0"
                  max="100"
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., 25"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Valid Until</label>
                <input
                  type="datetime-local"
                  name="validUntil"
                  value={promoData.validUntil}
                  onChange={handleInputChange}
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Max Uses</label>
                <input
                  type="number"
                  name="maxUses"
                  value={promoData.maxUses}
                  onChange={handleInputChange}
                  min="1"
                  className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="e.g., 10"
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  {editMode ? 'Update' : 'Create'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Promo;