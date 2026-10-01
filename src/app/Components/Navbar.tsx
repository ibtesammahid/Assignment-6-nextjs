"use client";
import Image from 'next/image';
import React from 'react';
import Logo from '@/assets/logo.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {

  const pathname = usePathname();
    return (
   <div className="navbar bg-black shadow-sm  ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Link href="/">Workout</Link></li>
        <li><Link href="/MyPlan">My Plan</Link></li>
      </ul>
    </div>

    <div className="flex items-center gap-1">

      <Link href="/"><Image src={Logo} alt="Logo"  /></Link>
    <Link href="/" className="text-xl font-bold">FITLOG</Link>
    </div>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="flex gap-4 menu menu-horizontal ">
     <li><Link href="/" className={pathname === '/' ? 'text-lime-400 border-lime-400 bg-[#1A2312] rounded-2xl' : 'text-gray-500'}>Workout</Link></li>
        <li><Link href="/MyPlan" className={pathname === '/MyPlan' ? 'text-lime-400 border-lime-400 bg-[#1A2312] rounded-2xl' : 'text-gray-500'}>My Plan</Link></li>
      
    </ul>
  </div>
  <div className="navbar-end flex gap-2">
    <Link href="/MyPlan"><button className="btn">Plan</button></Link>
    <Link href="/MyPlan"><button className="btn">Saved</button></Link>
    
  </div>
</div>
    );
};

export default Navbar;