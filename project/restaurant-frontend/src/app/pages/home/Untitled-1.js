"use client";

import React, { useRef, useEffect } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import Image from 'next/image';
import LOGO from "/public/logo.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';


const backgroundImages = [
  { img: "/bg.jpg", text: "Welcome to Arcadia Café and Restaurant" },
  { img: "/E1.jpg", text: "Experience Culinary Delight" },
  { img: "/c1.jpg", text: "Elegant Dining Spaces" },
  { img: "/ab.jpg", text: "Where Every Meal Becomes a Memory" }
];

const Home = () => {
  const scrollRef = useRef(null);
const scrollDirection = useRef(1); // 1 = right, -1 = left
  const scrollPosition = useRef(0);

 useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollStep = container.clientWidth / 2; // scroll half screen at a time
    const intervalTime = 4000;

    const scrollInterval = setInterval(() => {
      if (!container) return;

      const maxScrollLeft = container.scrollWidth - container.clientWidth;

      // Update scrollPosition depending on direction
      scrollPosition.current += scrollStep * scrollDirection.current;

      // Reverse direction if limits reached
      if (scrollPosition.current >= maxScrollLeft) {
        scrollPosition.current = maxScrollLeft;
        scrollDirection.current = -1; // change direction to left
      } else if (scrollPosition.current <= 0) {
        scrollPosition.current = 0;
        scrollDirection.current = 1; // change direction to right
      }

      container.scrollTo({
        left: scrollPosition.current,
        behavior: "smooth"
      });
    }, intervalTime);

    return () => clearInterval(scrollInterval);
  }, []);



  return (
    <MainLayout>
      <div
        ref={scrollRef}
        className="w-full overflow-x-auto whitespace-nowrap scroll-smooth snap-x snap-mandatory scrollbar-hide"
        style={{ scrollBehavior: "smooth" }}
      >
        {backgroundImages.map(({ img, text }, idx) => (
          <div
            key={idx}
            className="inline-block w-full h-screen bg-cover bg-center snap-start relative font-serif "
            style={{ backgroundImage: `url('${img}')` }}
          >
            <div className="h-full w-full flex items-center justify-center bg-black/50">
              <h3 className="text-white text-4xl md:text-5xl font-bold text-center px-4 drop-shadow-lg">
                {text}
              </h3>
            </div>
          </div>
        ))}
      </div>

{/*--------------about section------------------------------------------------------------------*/}
  
 <section className="bg-white py-16 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm font-semibold text-yellow-700 tracking-widest uppercase mb-2">
          Arcadia Negombo
        </p>
        <h2 className="text-4xl font-light text-black mb-6">
         Perfect Food  Perfect Moments
        </h2>
        <p className="text-gray-800 leading-relaxed text-lg mb-10">
          Whether it’s a cozy dinner for two, a birthday bash, or a spontaneous hangout Arcadia Negombo is the place where memories are made and moments shine. 
Savor every bite, bask in the ambiance, and feel the magic of our signature hospitality that makes every visit unforgettable.
        </p>
        
          <div className="flex justify-center py-10">
      <Link href="/pages/about">
        <button
          type="button"
          className="w-40 py-2 px-4  border-2 border-yellow-700 text-black rounded-3xl hover:bg-yellow-400 transition"
        >
          See More
        </button>
      </Link>
  </div>
      </div>
    </section>



{/*----------------------------------------------------------------menu section---------------------------------------------------------*/}


<div className="flex justify-center items-center py-4 pb-0 bg-stone-900 px-4  pt-8">
    <div className="text-center w-full">
      <p className="text-3xl text-yellow-500 font-medium mb-4">Menu Items</p>{/*heading*/}
      <h2 className="text-xl font-bold text-white mb-8"></h2>

     <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
    
      </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
 {/* Menu Item 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition duration-300">
          <img 
            src="/rice.jpg" 
            alt="Menu Item 1" 
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Mixed Fried Rice</h3>
            <p className="text-gray-500">RS.2430</p>
          </div>
        </div>


 {/* Menu Item 2 */}
 <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition duration-300">
          <img 
            src="/passta.jpg" 
            alt="Menu Item 2" 
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Penne & Shrimp Pasta in Cream Sauce
            </h3>
            <p className="text-gray-500">RS.1600</p>
          </div>
        </div>

        {/* Menu Item 3 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition duration-300">
          <img 
            src="/p1.jpg" 
            alt="Menu Item 3" 
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">Chicken Kottu</h3>
            <p className="text-gray-500">RS.1890</p>
          </div>
        </div>
 
              </div>


              <div className="flex justify-center py-10">
      <Link href="/pages/menu">
        <button
          type="button"
          className="w-40 py-2 px-4 bg-yellow-500 text-black rounded-3xl hover:bg-yellow-700 transition"
        >
          See More
        </button>
      </Link>
  </div>
  </div>
</div>

{/*-----------------------------------------------------------reservation---------------------------*/}

<div>
        <section className='max-w-7xl mx-auto px-6 py-16 bg-stone-200' >
        <div className='grid grid-cols-1 md:grid-cols-2 item-center gap-1'>
        <img src="/reservation.jpg" alt="Descriptive alt" className="w-150 h-80 rounded-lg " />{/*image*/}

  <div className="flex justify-end px-6 ">
  <div className="max-w-xl text-right">
    <p className="uppercase text-2xl font-semibold text-black mb-2">Reservation</p>
    <h2 className="text-yellow-500 text-3xl font-bold">
      Now booking your Table
    </h2>
    <p className="text-black mb-6">
    Whether it’s a laid-back coffee, an intimate dinner, or a lively weekend hangout,
     we’ve created a space that feels just right for every moment. 
    </p>
 <button 
              type="submit"
              className="w-40  py-2 px-4 my-6 bg-yellow-500 text-black rounded-3xl hover:bg-yellow-700 border
               px-4 bg-amber-950 transition">
              <Link href='/pages/reservation'>
           See More
          </Link>
      </button>
      </div>  
      </div>
           
         </div> 
         </section>
         </div> 



  </MainLayout> 

  );
};

export default Home;
