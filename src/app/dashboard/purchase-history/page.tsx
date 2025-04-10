"use client";
import React, { useState } from 'react';

const PurchaseHistory = () => {
  const [orders] = useState([
    {
      orderId: '#2223',
      courseName: 'Batch-2 | Algorithm Design using C/C++',
      date: 'August 29, 2024',
      price: '0৳',
      status: 'Completed',
    },
    {
      orderId: '#2079',
      courseName: 'Batch-2 | Machine Learning Course',
      date: 'August 18, 2024',
      price: '1,528৳',
      status: 'Pending',
    },
    {
      orderId: '#1984',
      courseName: 'Batch-2 | Data Structure with C',
      date: 'August 16, 2024',
      price: '0৳',
      status: 'Completed',
    },
  ]);

  const printInvoice = (order) => {
    const printWindow = window.open('', '', 'width=600,height=400');
    printWindow.document.write(`
      <html>
        <head>
          <title>Invoice</title>
          <style>
            body { font-family: Arial, sans-serif; padding: 20px; }
            .invoice { max-width: 500px; margin: 0 auto; }
            h1 { text-align: center; color: #333; }
            p { margin: 10px 0; }
            .label { font-weight: bold; }
          </style>
        </head>
        <body>
          <div class="invoice">
            <h1>Invoice</h1>
            <p><span class="label">Order ID:</span> ${order.orderId}</p>
            <p><span class="label">Course Name:</span> ${order.courseName}</p>
            <p><span class="label">Date:</span> ${order.date}</p>
            <p><span class="label">Price:</span> ${order.price}</p>
            <p><span class="label">Status:</span> 
              <span style="color: ${order.status === 'Completed' ? 'green' : 'red'}">${order.status}</span>
            </p>
          </div>
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-6 sm:mb-8 text-center">
        Order History
      </h2>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-800">
                <th className="py-3 px-4 text-left text-xs sm:text-sm font-semibold">Order ID</th>
                <th className="py-3 px-4 text-left text-xs sm:text-sm font-semibold">Course Name</th>
                <th className="py-3 px-4 text-left text-xs sm:text-sm font-semibold hidden sm:table-cell">
                  Date
                </th>
                <th className="py-3 px-4 text-left text-xs sm:text-sm font-semibold hidden md:table-cell">
                  Price
                </th>
                <th className="py-3 px-4 text-left text-xs sm:text-sm font-semibold hidden md:table-cell">
                  Status
                </th>
                <th className="py-3 px-4 text-left text-xs sm:text-sm font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index} className="border-b hover:bg-gray-50">
                  {/* Mobile Card View */}
                  <td colSpan={6} className="p-4 sm:hidden">
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between">
                        <span className="font-medium text-sm">{order.orderId}</span>
                        <button
                          onClick={() => printInvoice(order)}
                          className="py-1 px-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 text-xs transition duration-300"
                        >
                          Print
                        </button>
                      </div>
                      <span className="text-sm">{order.courseName}</span>
                      <span className="text-sm text-gray-600">{order.date}</span>
                      <span className="text-sm text-gray-600">{order.price}</span>
                      <span
                        className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
                          order.status === 'Completed'
                            ? 'bg-green-100 text-green-600'
                            : 'bg-red-100 text-red-600'
                        }`}
                      >
                        {order.status}
                      </span>
                    </div>
                  </td>

                  {/* Desktop Table View */}
                  <td className="py-3 px-4 text-sm hidden sm:table-cell">{order.orderId}</td>
                  <td className="py-3 px-4 text-sm hidden sm:table-cell">{order.courseName}</td>
                  <td className="py-3 px-4 text-sm hidden sm:table-cell">{order.date}</td>
                  <td className="py-3 px-4 text-sm hidden md:table-cell">{order.price}</td>
                  <td className="py-3 px-4 text-sm hidden md:table-cell">
                    <span
                      className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${
                        order.status === 'Completed'
                          ? 'bg-green-100 text-green-600'
                          : 'bg-red-100 text-red-600'
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-sm hidden sm:table-cell">
                    <button
                      onClick={() => printInvoice(order)}
                      className="py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300 text-sm"
                    >
                      Print Invoice
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Empty State */}
      {orders.length === 0 && (
        <div className="text-center py-10">
          <p className="text-gray-500 text-sm sm:text-base">No purchase history found.</p>
        </div>
      )}
    </div>
  );
};

export default PurchaseHistory;