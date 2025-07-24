
'use client';

import Link from 'next/link';
import { useAuth } from '@/context/AuthContext'; // Make sure the path is correct
import LOGO from "../../../public/logo.jpg"// logo path
import Image from 'next/image'; // ✅ Correct import

import { usePathname,useRouter } from 'next/navigation';
import {
  LayoutDashboard,
  Utensils,
 
  Calendar,
  ShoppingCart,
  Mail,
  LogIn,
  UserPlus,
  
  
} from 'lucide-react';

const NavItem = ({ icon, label, href }) => {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center px-4 py-2 rounded-lg transition-all ${
        active
          ? 'bg-gray-800 text-white'
          : 'text-gray-400 hover:bg-gray-800 hover:text-white'
      }`}
    >
      <div className="mr-3">{icon}</div>
      <span className="text-sm font-medium">{label}</span>
    </Link>
  );
};

const Sidebar = () => {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout(); // Clear token/user
    router.push('/pages/signin'); // Redirect to login page
  };

  return (
    <div className="h-screen w-64 bg-black text-white flex flex-col">
            
              <div className='px-15 '>
                <Image src ={LOGO} alt ="logo" width={90} height={60}/>
              </div>
      <div className="px-6 py-4 text-2xl font-bold border-b border-gray-700">
        FoodDash
      </div>
      <nav className="flex-1 px-4 py-6 space-y-2">
        <NavItem icon={<Utensils size={20} />} label="Menu" href="/admin/menu" />
        <NavItem icon={<Calendar size={20} />} label="Reservation" href="/admin/reservation" />
        <NavItem icon={<Mail size={20} />} label="Contact" href="/admin/contact" />
        <NavItem icon={<UserPlus size={20} />} label="Register" href="/admin/register" />

            {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="flex items-center w-full px-4 py-2 text-left rounded-lg text-gray-400 hover:bg-gray-800 hover:text-white transition"
        >
          <logout size={20} className="mr-3" />
          <span className="text-sm font-medium">Logout</span>
        </button>

      </nav>






      <div className="px-6 py-4 text-sm text-gray-400 border-t border-gray-700">
        © 2025 FoodDash Admin
      </div>
    </div>
  );
};

export default Sidebar;

