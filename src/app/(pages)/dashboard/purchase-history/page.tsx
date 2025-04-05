"use client"

// pages/purchase-history.js
import React from 'react';

const PurchaseHistory = () => {
    const orders = [
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
    ];

    const printInvoice = (order) => {
        const printWindow = window.open('', '', 'width=600,height=400');
        printWindow.document.write('<html><head><title>Invoice</title></head><body>');

        printWindow.document.write(`
      <div style="text-align: center; padding: 20px;">
        <h1>Invoice</h1>
        <p><strong>Order ID:</strong> ${order.orderId}</p>
        <p><strong>Course Name:</strong> ${order.courseName}</p>
        <p><strong>Date:</strong> ${order.date}</p>
        <p><strong>Price:</strong> ${order.price}</p>
        <p><strong>Status:</strong> <span style="color: ${order.status === 'Completed' ? 'green' : 'red'}">${order.status}</span></p>
      </div>
    `);

        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();
    };

    return (
        <div className="py-4 ">
            <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Order History</h2>

            <div className="bg-white rounded-lg">
                <table className="min-w-full table-auto ">
                    <thead>
                        <tr className="bg-gray-300/80 text-gray-800 overflow-auto">
                            <th className="py-3 px-4 text-left text-sm sm:text-base">Order ID</th>
                            <th className="py-3 px-4 text-left text-sm sm:text-base">Course Name</th>
                            <th className="py-3 px-4 text-left text-sm sm:text-base">Date</th>
                            <th className="py-3 px-4 text-left text-sm sm:text-base">Price</th>
                            <th className="py-3 px-4 text-left text-sm sm:text-base">Status</th>
                            <th className="py-3 px-4 text-left text-sm sm:text-base">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                            <tr key={index} className="border-b hover:bg-gray-50 overflow-auto">
                                <td className="py-3 px-4 text-sm sm:text-base">{order.orderId}</td>
                                <td className="py-3 px-4 text-sm sm:text-base">{order.courseName}</td>
                                <td className="py-3 px-4 text-sm sm:text-base">{order.date}</td>
                                <td className="py-3 px-4 text-sm sm:text-base">{order.price}</td>
                                <td className="py-3 px-4 text-sm sm:text-base">
                                    <span
                                        className={`px-3 py-1 text-sm font-semibold rounded-full ${order.status === 'Completed' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                                            }`}
                                    >
                                        {order.status}
                                    </span>
                                </td>
                                <td className="py-3 px-4 text-sm sm:text-base">
                                    <button
                                        onClick={() => printInvoice(order)}
                                        className="py-2 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
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
    );
};

export default PurchaseHistory;
