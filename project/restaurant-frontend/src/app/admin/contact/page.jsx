/*

'use client';

import React, { useEffect, useState } from 'react';
import AdminLayout from '@/components/layout/AdminLayout';

const ContactAdminPage = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/admin/contact')
      .then(res => res.json())
      .then(data => setContacts(data.contacts || [])) // assuming API returns { contacts: [...] }
      .catch(error => console.error('Error fetching contacts:', error));
  }, []);

  return (
    <AdminLayout>
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Contact Enquiries</h2>
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-2 border">Name</th>
                <th className="p-2 border">Email</th>
                <th className="p-2 border">Phone</th>
                <th className="p-2 border">Message</th>
                <th className="p-2 border">Date</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((c) => (
                <tr key={c._id} className="border-t">
                  <td className="p-2 border">{c.fullName}</td>
                  <td className="p-2 border">{c.email}</td>
                  <td className="p-2 border">{c.phone}</td>
                  <td className="p-2 border">{c.message}</td>
                  <td className="p-2 border">{new Date(c.createdAt).toLocaleString()}</td>
                </tr>
              ))}
              {contacts.length === 0 && (
                <tr>
                  <td colSpan="5" className="text-center p-4">No enquiries found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default ContactAdminPage;
*/
"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminLayout from "@/components/layout/AdminLayout";

const AdminContactPage = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/admin/contact')
      .then(res => {
        setContacts(res.data || []); // Because backend returns raw array
      })
      .catch(err => {
        console.error("Failed to fetch contacts:", err);
      });
  }, []);


  return (
    <AdminLayout>
      <div className="p-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Enquiries</h2>
        <table className="w-full border text-sm">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Phone</th>
              <th className="p-2 border">Message</th>
              <th className="p-2 border">Date</th>
            </tr>
          </thead>
          <tbody>
            {contacts.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center p-4">No contact data available.</td>
              </tr>
            ) : (
              contacts.map((c) => (
                <tr key={c._id}>
                  <td className="p-2 border">{c.fullName}</td>
                  <td className="p-2 border">{c.email}</td>
                  <td className="p-2 border">{c.phone}</td>
                  <td className="p-2 border">{c.message}</td>
                  <td className="p-2 border">{new Date(c.createdAt).toLocaleString()}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
};

export default AdminContactPage;
