
import React from 'react';
import MainLayout from '@/components/layout/MainLayout';

const images = [
  "/gallery/b1.jpg",
  "/gallery/c1.jpg",
  "/gallery/b2.jpg",
 "/ab.jpg",
  "/about.jpg",
"/gallery/t3.jpg",
  "/bg.jpg",
"/p1.jpg",
  "/rice.jpg",
  "/passta.jpg",
  "/gallery/pasta.jpg",
  "/gallery/f1.jpg",

];

export default function Page() {
  return (

    <MainLayout>
    <div className="bg-black min-h-screen text-white font-serif">
      <h2 className="text-4xl font-bold text-center py-10 text-yellow-400">Gallery</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 pb-12">
        {images.map((src, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg shadow-lg border border-gray-700">
            <img
              src={src}
              alt={`Gallery item ${idx + 1}`}
              className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
    </MainLayout>
  );
}


/*
'use client';
import React, { useEffect, useState } from 'react';
import MainLayout from '@/components/layout/MainLayout';

export default function UserGallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/gallery');
        const data = await res.json();
        setImages(data);
      } catch (err) {
        console.error('Failed to load images:', err);
      }
    };

    fetchImages();
  }, []);

  return (
    <MainLayout>
      <div className="bg-black min-h-screen text-white font-serif">
        <h2 className="text-4xl font-bold text-center py-10 text-yellow-400">Gallery</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 pb-12">
          {images.map((item, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-lg shadow-lg border border-gray-700"
            >
              <img
                src={item.image} // item has an `image` field from MongoDB
                alt={`User gallery ${idx + 1}`}
                className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
*/


