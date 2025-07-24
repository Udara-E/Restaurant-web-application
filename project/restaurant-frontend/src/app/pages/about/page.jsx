import MainLayout from '@/components/layout/MainLayout';
import { FaUtensils, FaGlassCheers, FaTruck,FaCalendarCheck } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import Link from 'next/link';

import Image from 'next/image';//logo import
import LOGO from "/public/logo.jpg"// logo path
import { faInstagram, faFacebook, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function page() {
  return (
    <MainLayout>
    <>
      {/* Hero Section with Background Image */}
      
      <div
        className="h-screen bg- bg-center"
        style={{ backgroundImage: "url('/reservation.jpg')" }}
      >
        <div className="flex items-center justify-center h-full text-white text-6xl font-bold backdrop-brightness-50">
          About
        </div>
      </div>
      <section className="m-10 text-center">
      <p className="p-10" >
          Nestled in the heart of the city, Arcadia is more than just a place to eat — it’s where great food,
          warm ambiance, and exceptional service come together. Whether you're planning an intimate dinner,
          a joyful celebration, or a casual get-together, Arcadia offers the perfect setting.
        </p>
      </section>

      {/* Info Cards Section */}
      <div className="bg-[#1a1a1a] text-gray-200 py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 ">
          
          {/* dining */}
          <div className="flex items-start gap-6">
            <FaUtensils className="text-[#c4a26a] text-7xl -mt-4" />
            <div>
              <h3 className="text-white text-2xl font-semibold mb-2">Dine with Elegance</h3>
              <p className="text-gray-300 leading-relaxed">
              Our chefs craft each dish with love and creativity, using only the freshest ingredients. From hearty
          breakfasts to elegant dinners, every plate is a celebration of flavor. Enjoy your meals in a cozy,
          modern space designed for comfort and connection.
              </p>
            </div>
          </div>

          {/* celebration */}
          <div className="flex items-start gap-6">
            <FaGlassCheers className="text-[#c4a26a] text-8xl -mt-6" />
            <div>
              <h3 className="text-white text-2xl font-semibold mb-2">Celebrate Special Moments</h3>
              <p className="text-gray-300 leading-relaxed">
              Birthdays, anniversaries, corporate events — whatever you're celebrating, Arcadia is your destination.
              We offer custom menus, beautiful décor, and seamless planning to make your event unforgettable.
              </p>
            </div>
          </div>

          {/*  Deliciousness Delivered */}
          <div className="flex items-start gap-6">
            <FaTruck className="text-[#c4a26a] text-7xl -mt-4" />
            <div>
              <h3 className="text-white text-2xl font-semibold mb-2"> Deliciousness Delivered</h3>
              <p className="text-gray-300 leading-relaxed">
              Craving Arcadia at home? No problem. Our fast and reliable delivery service brings your favorite
              dishes right to your doorstep — hot, fresh, and ready to enjoy.
              </p>
            </div>
          </div>
  {/* Booking */}
  <div className="flex items-start gap-6">
            <FaCalendarCheck className="text-[#c4a26a] text-7xl -mt-4" />
            <div>
              <h3 className="text-white text-2xl font-semibold mb-2">Booking</h3>
              <p className="text-gray-300 leading-relaxed">
              No waiting, no hassle. With our easy online reservation system, you can book your table in just a
              few clicks. Whether it's a romantic evening or a family feast, your perfect spot awaits.              </p>
            </div>
          </div>
          </div>


    </div>
    </>
    </MainLayout>
  );
}
