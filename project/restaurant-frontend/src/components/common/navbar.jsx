
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';//logo import
import LOGO from "../../../public/logo.jpg"// logo path
import MainLayout from '../layout/MainLayout';
const Navbar = () => {
  return (
    
    <div>
      <nav className='bg-stone-950 p-2 flex items-center justify-between text-white  '  >
      
        <div className='px-15 '>
          <Image src ={LOGO} alt ="logo" width={90} height={60}/>
        </div>

       <div className=' p-3 flex space-x-10 items-center justify-between'> 

        <Link href="/pages/home" className='hover:text-amber-400'>Home</Link>
       <Link href='/pages/about' className='hover:text-amber-400'>About</Link>
        <Link href="/pages/menu" className='hover:text-amber-400'>Menu</Link>
        <Link href="/pages/gallery" className='hover:text-amber-400'>Gallery</Link>
        <Link href="/pages/reservation" className='hover:text-amber-400'>Reservation</Link>
        {/*<Link href="/pages/order" className='hover:text-amber-400'>Order</Link>
                <Link href="/pages/Buffet" className='hover:text-amber-400'>Buffet</Link>*/}

        <Link href="/pages/contact" className='hover:text-amber-400'>Contact</Link>

        </div>   
        <div className='flex space-x-10 px-8 '>
        <Link href="/pages/signin" className='hover:text-amber-400'>Sign</Link>
        <Link href="/pages/register" className='hover:text-amber-400'>Register</Link>

       
        </div>
      </nav>
    
      {/*<nav className='bg-yellow-400 p-0.5 '></nav>*/}
    </div>
    
  );
};

export default Navbar;
