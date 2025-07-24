
'use client';

import React, { useEffect, useState } from 'react';
import AdminLayout from '@/components/layout/AdminLayout';

const LoginDetailsPage = () => {
  const [logins, setLogins] = useState([]);

  useEffect(() => {
    const now = new Date().toLocaleString();
    setLogins([
      {
        id: 1,
        email: 'user1@example.com',
        password: '******',
        dateTime: now,
      },
      {
        id: 2,
        email: 'user2@example.com',
        password: '******',
        dateTime: now,
      },
    ]);
  }, []);

  return (
    <AdminLayout>
      <div className="p-6 m-4 bg-white rounded shadow w-full">
        <h1 className="text-xl font-semibold mb-4">Login Details</h1>
        <table className="min-w-full border border-gray-200 rounded">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Password</th>
              <th className="px-4 py-2 text-left">Date & Time</th>
            </tr>
          </thead>
          <tbody>
            {logins.map((login) => (
              <tr key={login.id} className="border-t border-gray-200">
                <td className="px-4 py-2">{login.email}</td>
                <td className="px-4 py-2">{login.password}</td>
                <td className="px-4 py-2">{login.dateTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default LoginDetailsPage;


