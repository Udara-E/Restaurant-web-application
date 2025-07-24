/*

"use client";
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';

const HighTeaBookingPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    contact: '',
    people: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking Submitted:', formData);
    // TODO: Send data to backend here (e.g., using fetch or Axios)
    alert('Booking submitted!');
  };

  return (
    <MainLayout>
      <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-bold mb-6 text-center text-yellow-600">High Tea Booking</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 mt-1"
              placeholder="yourname@example.com"
            />
          </div>

          <div>
            <label className="block text-gray-700">Contact Number</label>
            <input
              type="tel"
              name="contact"
              required
              value={formData.contact}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 mt-1"
              placeholder="07X-XXXXXXX"
            />
          </div>

          <div>
            <label className="block text-gray-700">Number of People</label>
            <input
              type="number"
              name="people"
              required
              value={formData.people}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2 mt-1"
              placeholder="e.g., 2"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-white font-semibold py-2 px-4 rounded hover:bg-yellow-600"
          >
            Book High Tea
          </button>
        </form>
      </div>
    </MainLayout>
  );
};

export default HighTeaBookingPage;
*/
"use client";
import React, { useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';

const HighTeaBookingPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    contact: '',
    people: '',
  });

  const [showPayment, setShowPayment] = useState(false);
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    nameOnCard: '',
    expiry: '',
    cvv: '',
  });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePaymentChange = (e) => {
    setPaymentData({ ...paymentData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPayment(true); // show popup
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    console.log('Booking:', formData);
    console.log('Payment:', paymentData);
    setShowPayment(false);
    alert('Payment successful! Booking confirmed.');
  };

  return (
    <MainLayout>
      <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded shadow">
        <h2 className="text-2xl font-bold mb-6 text-center text-yellow-600">High Tea Booking</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="email" name="email" required onChange={handleFormChange} className="w-full border rounded px-3 py-2" placeholder="Email" />
          <input type="tel" name="contact" required onChange={handleFormChange} className="w-full border rounded px-3 py-2" placeholder="Contact Number" />
          <input type="number" name="people" required onChange={handleFormChange} className="w-full border rounded px-3 py-2" placeholder="Number of People" />
          <button type="submit" className="w-full bg-yellow-500 text-white font-semibold py-2 rounded hover:bg-yellow-600">Book High Tea</button>
        </form>
      </div>

      {/* Payment Modal */}
      {showPayment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
            <h3 className="text-xl font-bold mb-4 text-yellow-600">Payment Details</h3>
            <form onSubmit={handlePaymentSubmit} className="space-y-4">
              <input type="text" name="cardNumber" required onChange={handlePaymentChange} className="w-full border rounded px-3 py-2" placeholder="Card Number" />
              <input type="text" name="nameOnCard" required onChange={handlePaymentChange} className="w-full border rounded px-3 py-2" placeholder="Name on Card" />
              <div className="flex gap-4">
                <input type="text" name="expiry" required onChange={handlePaymentChange} className="w-1/2 border rounded px-3 py-2" placeholder="MM/YY" />
                <input type="text" name="cvv" required onChange={handlePaymentChange} className="w-1/2 border rounded px-3 py-2" placeholder="CVV" />
              </div>
              <div className="flex justify-between">
                <button type="button" onClick={() => setShowPayment(false)} className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500">Cancel</button>
                <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Pay & Confirm</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </MainLayout>
  );
};

export default HighTeaBookingPage;
