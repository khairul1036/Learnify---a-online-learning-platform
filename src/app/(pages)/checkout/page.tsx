"use client";
import React, { useState } from "react";

const Checkout = () => {
  // State to hold the customer info and payment details
  const [promoCode, setPromoCode] = useState("");
  const [totalPrice, setTotalPrice] = useState(815); // Total price after charges
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentOption, setPaymentOption] = useState(""); // Bkash, Nagad, Rocket
  const [transactionId, setTransactionId] = useState("");
  const [paymentNumber, setPaymentNumber] = useState(""); // For payment method number
  const [isPaymentDone, setIsPaymentDone] = useState(false);

  const handlePromoChange = (e) => {
    setPromoCode(e.target.value);
  };

  const handleApplyPromo = () => {
    if (promoCode === "DISCOUNT10") {
      setTotalPrice(totalPrice * 0.9); // Apply 10% discount
    } else {
      alert("Invalid promo code");
    }
  };

  const handlePaymentMethodChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handlePaymentOptionChange = (e) => {
    setPaymentOption(e.target.value);
  };

  const handleTransactionIdChange = (e) => {
    setTransactionId(e.target.value);
  };

  const handlePaymentNumberChange = (e) => {
    setPaymentNumber(e.target.value);
  };

  const handleSubmitPayment = () => {
    // Check if transaction ID and payment method are valid
    if (transactionId && paymentNumber) {
      const paymentData = {
        name,
        email,
        promoCode,
        totalPrice,
        paymentMethod,
        paymentOption,
        paymentNumber,
        transactionId,
      };

      // Log the final data
      console.log("Payment data:", paymentData);

      alert("Payment submitted successfully!");
      setIsPaymentDone(true);
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-semibold text-center mb-8">Checkout</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section: Customer Information */}
        <div className="space-y-6">
          <h3 className="text-xl font-medium">Customer Information</h3>
          <form className="space-y-4">
            <div className="flex flex-col md:flex-row md:space-x-4">
              <div className="w-full md:w-1/2">
                <label className="block text-gray-700">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="John Doe"
                />
              </div>
              <div className="w-full md:w-1/2">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="johndoe@example.com"
                />
              </div>
            </div>
          </form>
        </div>

        {/* Right Section: Order Summary, Promo Code & Payment */}
        <div className="space-y-6">
          <h3 className="text-xl font-medium">Your Order</h3>
          <div className="bg-white shadow-md rounded-md p-6">
            {/* Order Items */}
            <div className="flex justify-between mb-4">
              <span className="text-gray-700">Batch-2 | C Programming & Problem Solving</span>
              <span className="text-gray-700">800৳</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-gray-700">Charge</span>
              <span className="text-gray-700">15৳</span>
            </div>

            {/* Promo Code Input */}
            <div className="mb-4">
              <label className="block text-gray-700">Promo Code</label>
              <div className="flex">
                <input
                  type="text"
                  value={promoCode}
                  onChange={handlePromoChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter promo code"
                />
                <button
                  onClick={handleApplyPromo}
                  className="cursor-pointer ml-2 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                >
                  Apply
                </button>
              </div>
            </div>

            {/* Total Price */}
            <div className="flex justify-between mt-4 font-semibold">
              <span className="text-gray-700">Total</span>
              <span className="text-gray-700">{totalPrice}৳</span>
            </div>
          </div>

          {/* Payment Section */}
          <h3 className="text-xl font-medium">Payment Method</h3>
          <div className="space-y-4">
            <div>
              <input
                type="radio"
                id="manualPayment"
                name="paymentMethod"
                value="manual"
                checked={paymentMethod === "manual"}
                onChange={handlePaymentMethodChange}
                className="mr-2"
              />
              <label htmlFor="manualPayment">Manual Payment</label>
            </div>

            {/* Manual Payment Options */}
            {paymentMethod === "manual" && (
              <div className="space-y-2 pl-6">
                <div>
                  <input
                    type="radio"
                    id="bkash"
                    name="paymentOption"
                    value="bkash"
                    checked={paymentOption === "bkash"}
                    onChange={handlePaymentOptionChange}
                    className="mr-2"
                  />
                  <label htmlFor="bkash">Bkash: 01788758131</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="nagad"
                    name="paymentOption"
                    value="nagad"
                    checked={paymentOption === "nagad"}
                    onChange={handlePaymentOptionChange}
                    className="mr-2"
                  />
                  <label htmlFor="nagad">Nagad: 0188885461</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="rocket"
                    name="paymentOption"
                    value="rocket"
                    checked={paymentOption === "rocket"}
                    onChange={handlePaymentOptionChange}
                    className="mr-2"
                  />
                  <label htmlFor="rocket">Rocket: 0196533211</label>
                </div>
              </div>
            )}

            {/* Payment Number Input */}
            {paymentMethod === "manual" && (
              <div className="mt-4">
                <label className="block text-gray-700">Your Number</label>
                <input
                  type="text"
                  value={paymentNumber}
                  onChange={handlePaymentNumberChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter your payment number"
                />
              </div>
            )}

            {/* Transaction ID Input */}
            {paymentMethod === "manual" && (
              <div className="mt-4">
                <label className="block text-gray-700">Transaction ID</label>
                <input
                  type="text"
                  value={transactionId}
                  onChange={handleTransactionIdChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md"
                  placeholder="Enter transaction ID"
                />
              </div>
            )}

            {/* Submit Payment */}
            <div className="mt-6">
              <button
                onClick={handleSubmitPayment}
                className="cursor-pointer w-full py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                {isPaymentDone ? "Payment Successful" : "Submit Payment"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
