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
  { img: "/home2.jpg", text: "Experience Culinary Delight" },
  { img: "/c1.jpg", text: "Elegant Dining Spaces" },
  { img: "/home1.jpg", text: "Where Every Meal Becomes a Memory" }
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
        
   {/* View More Button */}
            <div className="mt-16 flex justify-center">
              <Link href="/pages/about">
              <button className="px-8 py-3 border border-amber-500 text-amber-500 font-light hover:bg-amber-500 hover:text-white transition-all duration-300 transform hover:scale-105 custom-button">
                VIEW MORE ITEMS
              </button>
              </Link>
            </div>
      </div>
    </section>



{/*----------------------------------------------------------------menu section---------------------------------------------------------*/}


 <div>
      {/* This is the new section for "A COLLECTION OF COMFORT FOODS" */}
      <section className="bg-neutral-950 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto"> {/* Increased max-width to better fit the layout */}
          {/* Header Section */}
          <div className="text-center mb-16">
            <p className="text-xl font-serif text-gray-400 mb-2">Plates of Plenty</p>
            <h2 className="text-4xl font-light text-white sm:text-5xl mb-6 uppercase tracking-wider">A COLLECTION OF COMFORT FOODS</h2>
            <div className="w-16 h-0.5 bg-yellow-500 mx-auto"></div> {/* Decorative line */}
          </div>

          {/* Menu Content Grid with Chef Image */}
          <div className="grid grid-cols-1 lg:grid-cols-3 items-start gap-8">
            {/* Left Menu Column */}
            <div className="lg:col-span-1 flex flex-col space-y-8">
              {/* Menu Item 1 */}
              <div className="flex items-start space-x-4">
                {/* Removed food image: <img src="https://placehold.co/60x60/FFD700/000?text=Food" alt="Ocean Bounty" className="w-16 h-16 rounded-full object-cover border-2 border-yellow-500" /> */}
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-lg font-medium text-white">Chicken Pasta</h3> {/* Changed text-xl to text-lg */}
                    <span className="text-yellow-500 text-lg font-semibold">RS.1490.00</span>
                  </div>
                </div>
              </div>

              {/* Menu Item 2 */}
              <div className="flex items-start space-x-4">
                {/* Removed food image: <img src="https://placehold.co/60x60/FFD700/000?text=Food" alt="Mexican Tacos Portion" className="w-16 h-16 rounded-full object-cover border-2 border-yellow-500" /> */}
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-lg font-medium text-white">Chicken Chopsuey Rice</h3> {/* Changed text-xl to text-lg */}
                    <span className="text-yellow-500 text-lg font-semibold">RS.2000.00</span>
                  </div>
                </div>
              </div>

              {/* Menu Item 3 */}
              <div className="flex items-start space-x-4">
                {/* Removed food image: <img src="https://placehold.co/60x60/FFD700/000?text=Food" alt="Italian Spaghetti Carbonara" className="w-16 h-16 rounded-full object-cover border-2 border-yellow-500" /> */}
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-lg font-medium text-white">Vegetable Kottu</h3> {/* Changed text-xl to text-lg */}
                    <span className="text-yellow-500 text-lg font-semibold">RS.1220.00</span>
                  </div>
                </div>
              </div>

              {/* Menu Item 4 */}
              <div className="flex items-start space-x-4">
                {/* Removed food image: <img src="https://placehold.co/60x60/FFD700/000?text=Food" alt="Red Velvet Cupcakes" className="w-16 h-16 rounded-full object-cover border-2 border-yellow-500" /> */}
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-lg font-medium text-white">Chicken Kottu</h3> {/* Changed text-xl to text-lg */}
                    <span className="text-yellow-500 text-lg font-semibold">RS.1500.00</span>
                  </div>
                </div>
              </div>

              {/* Menu Item 5 */}
              <div className="flex items-start space-x-4">
                {/* Removed food image: <img src="https://placehold.co/60x60/FFD700/000?text=Food" alt="Mango Sorbet" className="w-16 h-16 rounded-full object-cover border-2 border-yellow-500" /> */}
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-lg font-medium text-white">Mixed Fried Rice</h3> {/* Changed text-xl to text-lg */}
                    <span className="text-yellow-500 text-lg font-semibold">RS.1500.00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Central Chef Image Column */}
            <div className="lg:col-span-1 flex justify-center items-center">
              <img src="/homeMenu.jpg" alt="Professional Chef" className="w-full max-w-xs md:max-w-sm lg:max-w-full h-80 object-cover rounded-lg shadow-lg" />
            </div>

            {/* Right Menu Column */}
            <div className="lg:col-span-1 flex flex-col space-y-8">
              {/* Menu Item 6 */}
              <div className="flex items-start space-x-4">
                {/* Removed food image: <img src="https://placehold.co/60x60/FFD700/000?text=Food" alt="Classic Chees Pizza" className="w-16 h-16 rounded-full object-cover border-2 border-yellow-500" /> */}
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-lg font-medium text-white">Chicken Biriyani</h3> {/* Changed text-xl to text-lg */}
                    <span className="text-yellow-500 text-lg font-semibold">RS.2500.00</span>
                  </div>
                </div>
              </div>

              {/* Menu Item 7 */}
              <div className="flex items-start space-x-4">
                {/* Removed food image: <img src="https://placehold.co/60x60/FFD700/000?text=Food" alt="Pork Italian Salsa" className="w-16 h-16 rounded-full object-cover border-2 border-yellow-500" /> */}
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-lg font-medium text-white">Spicy Thai Rice</h3> {/* Changed text-xl to text-lg */}
                    <span className="text-yellow-500 text-lg font-semibold">RS.1870.00</span>
                  </div>
                </div>
              </div>

              {/* Menu Item 8 */}
              <div className="flex items-start space-x-4">
                {/* Removed food image: <img src="https://placehold.co/60x60/FFD700/000?text=Food" alt="Roasted Squash Gnocchi" className="w-16 h-16 rounded-full object-cover border-2 border-yellow-500" /> */}
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-lg font-medium text-white">Nasi Goorang</h3> {/* Changed text-xl to text-lg */}
                    <span className="text-yellow-500 text-lg font-semibold">RS.2450.00</span>
                  </div>
                </div>
              </div>

              {/* Menu Item 9 */}
              <div className="flex items-start space-x-4">
                {/* Removed food image: <img src="https://placehold.co/60x60/FFD700/000?text=Food" alt="Carrot Fries" className="w-16 h-16 rounded-full object-cover border-2 border-yellow-500" /> */}
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-lg font-medium text-white">Shrimp Noodles</h3> {/* Changed text-xl to text-lg */}
                    <span className="text-yellow-500 text-lg font-semibold">RS.1600.00</span>
                  </div>
                </div>
              </div>

              {/* Menu Item 10 */}
              <div className="flex items-start space-x-4">
                {/* Removed food image: <img src="https://placehold.co/60x60/FFD700/000?text=Food" alt="Acai Berry Bowl" className="w-16 h-16 rounded-full object-cover border-2 border-yellow-500" /> */}
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-lg font-medium text-white">Arcadia Special Rice</h3> {/* Changed text-xl to text-lg */}
                    <span className="text-yellow-500 text-lg font-semibold">RS.2000.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
            {/* View More Button */}
            <div className="mt-16 flex justify-center">
              <button className="px-8 py-3 border border-amber-500 text-amber-500 font-light hover:bg-amber-500 hover:text-white transition-all duration-300 transform hover:scale-105 custom-button">
                VIEW MORE ITEMS
              </button>
            </div>
        </div>
      </section>
    </div>

{/*-----------------------------------------------------------reservation---------------------------*/}

<div>
      {/* Main section container with a grid layout */}
      <section className='max-w-7xl mx-auto my-20 grid grid-cols-1 md:grid-cols-2 items-stretch'>

        {/* Image Column */}
        <div className="md:col-span-1">
          {/* Image fills its container height and covers the area */}
          <img
            src="/reservation.jpg" // Using the existing reservation image
            alt="Luxury hotel room or restaurant interior"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Content Column - Dark background with white text */}
        <div className="md:col-span-1 bg-gray-50 text-black p-8 flex flex-col justify-center mx-30">
          <div className="max-w-xl text-left mx-auto"> {/* Align text left, center block for smaller screens */}
            {/* Details from the provided code block, adapted for dark background */}
            <p className="uppercase text-2xl font-semibold text-black-950 mb-2 ">Reservation</p> {/* Changed text-black to text-yellow-500 for visibility */}
            <h2 className="text-yellow-500 text-3xl font-bold">
              Now booking your Table
            </h2>
            <p className="text-black-300 mb-6"> {/* Changed text-black to text-gray-300 for visibility */}
              Whether it’s a laid-back coffee, an intimate dinner, or a lively weekend hangout,
              we’ve created a space that feels just right for every moment.
            </p>

           
              {/* View More Button */}
            <div className="mt-16 flex justify-center">
              <button className="px-6 py-3 border border-amber-500 text-amber-500 font-light hover:bg-amber-500 hover:text-white transition-all duration-300 transform hover:scale-105 custom-button">
                
                 <Link href='/pages/reservation'>
                VIEW MORE ITEMS
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
