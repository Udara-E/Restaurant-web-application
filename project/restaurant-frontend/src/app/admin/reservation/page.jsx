

"use client";
import React, { useEffect, useState } from "react";
import AdminLayout from "@/components/layout/AdminLayout";
import axios from "axios";

export default function ReservationTable() {
  const [reservations, setReservations] = useState([]);

  const fetchReservations = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/reservations/get");
      setReservations(res.data);
    } catch (error) {
      console.error("Failed to fetch reservations:", error);
    }
  };

  useEffect(() => {
    fetchReservations();
  }, []);

  const handleStatusUpdate = async (id, newStatus) => {
    try {
      await axios.put(`http://localhost:5000/api/reservations/update/${id}`, {
        status: newStatus,
      });
      fetchReservations(); // Refresh list after update
    } catch (error) {
      console.error("Failed to update status:", error);
    }
  };

  return (
    <AdminLayout>
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-4">Reservations</h2>
        <table className="w-full table-auto text-sm text-left">
          <thead>
            <tr className="text-gray-500 border-b">
              <th>Name</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Guests</th>
              <th>Date</th>
              <th>Time</th>
              <th>Note</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((res) => (
              <tr key={res._id} className="border-b hover:bg-gray-50">
                <td>{res.name}</td>
                <td>{res.mobile}</td>
                <td>{res.email}</td>
                <td>{res.guests}</td>
                <td>{res.date}</td>
                <td>{res.time}</td>
                <td>{res.note}</td>
                <td className="italic text-gray-500">{res.status}</td>
                <td>
                  {res.status === "Pending" && (
                    <>
                      <button
                        onClick={() => handleStatusUpdate(res._id, "Accepted")}
                        className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 mr-2"
                      >
                        Accept
                      </button>
                      <button
                        onClick={() => handleStatusUpdate(res._id, "Cancelled")}
                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                      >
                        Cancel
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AdminLayout>
  );
}
