
import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // logo import
import LOGO from "../../../public/logo.jpg"; // logo path
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faXTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

import { FaTripadvisor } from 'react-icons/fa';

const Home = () => {
  return (
    <section> {/* Removed mt-10 from here */}
      {/* The main contact section is removed from here as requested */}
      <div className="bg-white text-center   text-black">
        {/* Removed: <h1 className="text-4xl font-bold mb-2">Contact us</h1> */}
        {/* Removed: <p className="text-black mb-8"></p> */}
        {/* Removed: div containing Email, Phone, Office details */}

        {/* Removed: "See More" button as contact details are now in the footer */}
        {/*
        <button
          type="submit"
          className="w-40 py-2 px-4 my-6 bg-yellow-500 text-black rounded-3xl hover:bg-yellow-700 border
                     px-4 bg-amber-950 transition"
        >
          <Link href='/pages/contact'>
            See More
          </Link>
        </button>
        */}

        {/* Footer - Now includes contact details */}
        <div className="border-t pt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-start justify-between text-sm bg-black text-white p-8 "> {/* Removed mt-2 from here */}
          {/* Logo */}
          <div className='col-span-1 flex justify-center md:justify-start mb-4 md:mb-0'>
            <Image src={LOGO} alt="logo" width={100} height={70} />
          </div>

          {/* Navigation Links */}
          <div className="col-span-1 flex flex-col items-center md:items-start space-y-2 mb-4  md:mb-0">
            <h3 className="font-semibold text-lg text-yellow-500 mb-2">Navigation</h3>
            <Link href="/pages/home" className="hover:text-yellow-400">Home</Link>
            <Link href='/pages/about' className="hover:text-yellow-400">About</Link>
            <Link href="/pages/menu" className="hover:text-yellow-400">Menu</Link>
            <Link href="/pages/gallery" className="hover:text-yellow-400">Gallery</Link>
            <Link href="/pages/reservation" className="hover:text-yellow-400">Reservation</Link>
            <Link href="/pages/order" className="hover:text-yellow-400">Order</Link>
            <Link href="/pages/contact" className="hover:text-yellow-400">Contact</Link>
            <Link href="/pages/review" className="hover:text-yellow-400">Review</Link>
          </div>

          {/* Branches */}
          <div className="col-span-1 flex flex-col items-center md:items-start space-y-1 mb-4 md:mb-0">
            <h3 className="font-semibold text-lg text-yellow-500 mb-0">Branch</h3>
            <p className="text-gray-300">Arcadia Negombo</p>
            <p className="text-gray-500 text-sm">No. 204, Sea Street, Negombo, Sri Lanka</p>
            <p className="text-gray-300 mt-2">Arcadia Cololmbo</p>
            <p className="text-gray-500 text-sm">No.5 Wickramasinghapura Rd, Battaramulla, Colombo, Sri Lanka</p>
          </div>

          {/* Open Time and Social Media */}
          <div className="col-span-1 flex flex-col items-center md:items-start space-y-2 mb-4 md:mb-0">
            <h3 className="font-semibold text-lg text-yellow-500 mb-2">Open Hours</h3>
            <p className="text-gray-300">Monday - Friday:      10:00 AM - 11:00 PM</p>
            <p className="text-gray-300">Saturday - Sunday:    10:00 AM - 11:00 PM</p>
            <div className="flex space-x-4 mt-4 text-lg">
              <a href="https://www.instagram.com/arcadianegombo/?utm_source=ig_web_button_share_sheet" className="hover:text-yellow-400">
                <FontAwesomeIcon icon={faInstagram} className="w-8 h-8" />
              </a>
              <a href="https://www.facebook.com/share/167YCFq76Q/" className="hover:text-yellow-400">
                <FontAwesomeIcon icon={faFacebook} className="w-8 h-8" />
              </a>
              <a href="https://vt.tiktok.com/ZSrcC7WWJ/" className="hover:text-yellow-400">
                <FontAwesomeIcon icon={faTiktok} className="w-8 h-8" />
              </a>
              <a href="https://www.tripadvisor.com/" className="hover:text-yellow-400">
                <FaTripadvisor className="w-8 h-8" />
              </a>
            </div>
          </div>

          {/* New: Contact Details in Footer */}
          <div className="col-span-1 flex flex-col items-center md:items-start space-y-2">
            <h3 className="font-semibold text-lg text-yellow-500 mb-2">Contact Details</h3>
            {/* Email */}
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faEnvelope} className="text-yellow-600 size-5" />
              <a href="mailto:arcadianegombo@gmail.com" className="text-gray-300 hover:text-yellow-400">
                arcadianegombo@gmail.com
              </a>
            </div>
            {/* Phone */}
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faPhone} className="text-yellow-600 size-5" />
              <a href="tel:+94777849492" className="text-gray-300 hover:text-yellow-400">
                077 784 9492
              </a>
            </div>
            {/* Location */}
            <div className="flex items-center space-x-2">
              <FontAwesomeIcon icon={faLocationDot} className="text-yellow-600 size-5" />
              <a href="#" className="text-gray-300 hover:text-yellow-400">
                No. 204, Sea Street, Negombo, Sri Lanka
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
