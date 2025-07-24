
'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { X } from 'lucide-react';
import axios from 'axios';

const Register = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNo: '',
    password: '',
    role: 'user',
    adminCode: '',
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting:", formData);

    try {
      const res = await axios.post('http://localhost:5000/api/user/reg', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      console.log('Registration Success:', res.data);
      setSuccessMessage('Registration successful! Redirecting...');

      setTimeout(() => {
        router.push('/pages/home');
      }, 2000);
    } catch (err) {
      console.error('Full error:', err);
      if (err.response) {
        alert(err.response.data?.message || 'Registration failed');
      } else if (err.request) {
        alert('Network error - is the server running?');
      } else {
        alert('Error: ' + err.message);
      }
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/gallery/f1.jpg')" }} // ✅ ensure image exists
    >
      <div className="relative bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <button
          onClick={() => router.back()}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
          aria-label="Close"
        >
          <X size={24} />
        </button>

        <h2 className="text-2xl font-semibold mb-6 text-center text-black">Register</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded"
            />
          </div>

          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded"
            />
          </div>

          <div>
            <label>Phone Number:</label>
            <input
              type="text"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded"
            />
          </div>

          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded"
            />
          </div>

          <div>
            <label>Role:</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {formData.role === 'admin' && (
            <div>
              <label>Admin Secret Code:</label>
              <input
                type="text"
                name="adminCode"
                value={formData.adminCode}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded"
              />
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-amber-400 text-white py-2 rounded hover:bg-amber-700 transition"
          >
            Register
          </button>

          {successMessage && <p className="text-green-600">{successMessage}</p>}
        </form>
      </div>
    </div>
  );
};

export default Register;


