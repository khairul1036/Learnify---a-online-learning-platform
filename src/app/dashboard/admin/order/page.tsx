"use client";
import React, { useState } from 'react';

const Order = () => {
  const [orders, setOrders] = useState([
    {
      id: 1,
      orderNumber: 'ORD-001',
      customerName: 'John Doe',
      email: 'john.doe@example.com',
      date: '2025-04-01',
      total: 199.99,
      status: 'Completed',
      items: [
        { name: 'React Course', quantity: 1, price: 99.99 },
        { name: 'JavaScript Book', quantity: 2, price: 50.00 }
      ],
      shippingAddress: '123 Main St, New York, NY 10001',
      paymentMethod: 'Credit Card',
      paymentNumber: 'PAY-001',
      transactionId: 'TXN-123456789'
    },
    {
      id: 2,
      orderNumber: 'ORD-002',
      customerName: 'Jane Smith',
      email: 'jane.smith@example.com',
      date: '2025-04-02',
      total: 149.99,
      status: 'Pending',
      items: [
        { name: 'Node.js Course', quantity: 1, price: 149.99 }
      ],
      shippingAddress: '456 Oak Ave, London, UK',
      paymentMethod: 'PayPal',
      paymentNumber: 'PAY-002',
      transactionId: 'TXN-987654321'
    }
  ]);

  const [selectedOrder, setSelectedOrder] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleViewOrder = (order) => {
    setSelectedOrder(order);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedOrder(null);
  };

  const handleStatusChange = (id, newStatus) => {
    setOrders(orders.map(order => 
      order.id === id ? { ...order, status: newStatus } : order
    ));
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      {/* Orders Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white shadow-sm rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Order #</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Customer</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Email</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Date</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Total</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-600">{order.orderNumber}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{order.customerName}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{order.email}</td>
                <td className="px-4 py-3 text-sm text-gray-600">{order.date}</td>
                <td className="px-4 py-3 text-sm text-gray-600">${order.total.toFixed(2)}</td>
                <td className="px-4 py-3">
                  <select
                    value={order.status}
                    onChange={(e) => handleStatusChange(order.id, e.target.value)}
                    className="w-full sm:w-32 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm capitalize"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Processing">Processing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => handleViewOrder(order)}
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
      {orders.length === 0 && (
        <div className="text-center py-10">
          <p className="text-gray-500">No orders found.</p>
        </div>
      )}

      {/* Order Details Modal */}
      {modalOpen && selectedOrder && (
        <div className="fixed inset-0 bg-gray-800/90 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Order Details - {selectedOrder.orderNumber}</h2>
              <button
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-gray-700 text-2xl"
              >
                ×
              </button>
            </div>
            <div className="space-y-6">
              {/* Customer Info */}
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-2">Customer Information</h3>
                <div className="space-y-2">
                  <p><span className="font-medium">Name:</span> {selectedOrder.customerName}</p>
                  <p><span className="font-medium">Email:</span> {selectedOrder.email}</p>
                  <p><span className="font-medium">Order Date:</span> {selectedOrder.date}</p>
                  <p><span className="font-medium">Shipping Address:</span> {selectedOrder.shippingAddress}</p>
                </div>
              </div>

              {/* Payment Info */}
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-2">Payment Information</h3>
                <div className="space-y-2">
                  <p><span className="font-medium">Payment Method:</span> {selectedOrder.paymentMethod}</p>
                  <p><span className="font-medium">Payment Number:</span> {selectedOrder.paymentNumber}</p>
                  <p><span className="font-medium">Transaction ID:</span> {selectedOrder.transactionId}</p>
                </div>
              </div>

              {/* Order Items */}
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-2">Order Items</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="px-3 py-2 text-left text-sm font-semibold text-gray-700">Item</th>
                        <th className="px-3 py-2 text-left text-sm font-semibold text-gray-700">Quantity</th>
                        <th className="px-3 py-2 text-left text-sm font-semibold text-gray-700">Price</th>
                        <th className="px-3 py-2 text-left text-sm font-semibold text-gray-700">Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedOrder.items.map((item, index) => (
                        <tr key={index} className="border-b border-gray-200">
                          <td className="px-3 py-2 text-sm text-gray-600">{item.name}</td>
                          <td className="px-3 py-2 text-sm text-gray-600">{item.quantity}</td>
                          <td className="px-3 py-2 text-sm text-gray-600">${item.price.toFixed(2)}</td>
                          <td className="px-3 py-2 text-sm text-gray-600">${(item.quantity * item.price).toFixed(2)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Order Summary */}
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-2">Order Summary</h3>
                <div className="flex justify-between">
                  <span className="font-medium">Total:</span>
                  <span>${selectedOrder.total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="font-medium">Status:</span>
                  <span className="capitalize">{selectedOrder.status}</span>
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

export default Order;