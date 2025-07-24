


"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import MainLayout from "@/components/layout/MainLayout";
import { faCloudShowersWater } from "@fortawesome/free-solid-svg-icons";

const categoryImages = {
  Drinks: "/p1.jpeg",
  SideDish: "/p1.jpg",
  Noodles: "/p1.jpeg",
  pasta: "/order/Main/M6egg.jpeg",
  
};

const UserMenuPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/admin/menu");
        setItems(res.data);
      } catch (error) {
        console.error("Error fetching menu items", error);
      }
    };
    fetchMenuItems();
  }, []);

  const grouped = items.reduce((acc, item) => {
    acc[item.category] = acc[item.category] || [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <MainLayout>
            
    <div className="min-h-screen bg-[#111] text-white p-6">
      <h1 className="text-4xl text-center font-bold text-white mb-10   pb-2">
        Our Menu
      </h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        {Object.entries(grouped).map(([category, items]) => (
          <div key={category}>

{/*image position */}
            {categoryImages[category] && (
              <img
                src={categoryImages[category]}
                alt={category}
                 //className="rounded-full mask-alpha object-cover border-2 border-yellow-700 shadow-md"
               
                className="rounded-full shadow-md mb-4 mx-8 w-100 max-h-100 object-cover "
              />
            )}

            <div className="flex items-center gap-4 mb-4">
              <div className="flex-1 border-t border-yellow-500" />
              <h2 className="text-2xl font-semibold text-yellow-500">{category}</h2>
              <div className="flex-1 border-t border-yellow-500" />
            </div>

   <ul className="space-y-2">
              {items.map((item) => (
                <li
                  key={item._id}
                  className="flex justify-between border-b border-gray-600 pb-1"
                >
                  <span>{item.name}</span>
                  <span className="text-yellow-400">Rs. {item.price}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  
  </MainLayout>
  );
};

export default UserMenuPage;

