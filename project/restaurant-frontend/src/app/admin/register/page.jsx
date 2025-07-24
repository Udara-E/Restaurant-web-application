
/*
'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from '@/components/layout/AdminLayout';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
/*
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        
        const res = await axios.get('http://localhost:5000/api/user/get');
        setUsers(res.data);
      } catch (err) {
        console.error('Error fetching users:', err);
      }
    };

    fetchUsers();
  }, []);
*

useEffect(() => {
  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem('token'); // get saved token

      const res = await axios.get('http://localhost:5000/api/user/get', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setUsers(res.data);
    } catch (err) {
      console.error('Error fetching users:', err);

    }
  };

  fetchUsers();
}, []);

  return (
    <AdminLayout>
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Registered Users</h1>
      <table className="w-full table-auto border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Phone</th>
            <th className='border px-4 py-2'>role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr key={idx} className="text-center">
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.phoneNo}</td>
              <td className='border px-4 py-2'>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </AdminLayout>
  );
};

export default AdminDashboard;

*/
"use client";
import React, { useEffect, useState } from 'react';
import AdminLayout from '@/components/layout/AdminLayout';
import { useAuth } from '@/context/AuthContext';

const AdminUsersPage = () => {
  const { user, loading } = useAuth();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (loading) return; // wait until auth finishes loading

    if (!user) {
      console.error('No logged-in user found. Please login.');
      // optionally redirect to login here
      return;
    }

    const fetchUsers = async () => {
      try {
        const res = await import('axios').then(({ default: axios }) =>
          axios.get('http://localhost:5000/api/user/get')
        );

        console.log('Fetched users:', res.data);
        setUsers(Array.isArray(res.data) ? res.data : res.data.users || []);
      } catch (err) {
        console.error('Error fetching users:', err);
      }
    };

    fetchUsers();
  }, [user, loading]);

  if (loading) {
    return (
      <AdminLayout>
        <div className="p-8 text-center">Loading authentication info...</div>
      </AdminLayout>
    );
  }

  if (!user) {
    return (
      <AdminLayout>
        <div className="p-8 text-center text-red-600">
          You must be logged in to view this page.
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="p-8">
        <h2 className="text-2xl font-semibold mb-4">Registered Users</h2>
        <table className="w-full border text-sm">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Phone</th>
              <th className="p-2 border">Role</th>
              <th className="p-2 border">Registered At</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center p-4">
                  No user data available.
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user._id}>
                  <td className="p-2 border">{user.name}</td>
                  <td className="p-2 border">{user.email}</td>
                  <td className="p-2 border">{user.phoneNo}</td>
                  <td className="p-2 border capitalize">{user.role}</td>
                  <td className="p-2 border">
                    {user.createdAt ? new Date(user.createdAt).toLocaleString() : '—'}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default AdminUsersPage;
