

"use client";

import MainLayout from '@/components/layout/MainLayout';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Page = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/pages/signin?redirect=/ReservationTable');
  };

  return (
    <MainLayout>
      <div className="relative h-screen bg-black text-white">
        {/* Background Image */}
        <Image
          src="/home2.jpg" // 🔁 Replace with your image in public folder
          alt="Elegant Restaurant Background"
          layout="fill"
          objectFit="cover"
          className="opacity-70"
          priority
        />

        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Reserve Your Table Today
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl drop-shadow-md">
            Experience the best cuisine in an elegant and cozy setting. Book your table now to enjoy a memorable dining experience.
          </p>
          <button
            onClick={handleClick}
            className="bg-yellow-600 hover:bg-yellow-500 transition px-6 py-3 rounded-lg text-white text-lg font-medium shadow-lg"
          >
            Reserve Table
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Page;
