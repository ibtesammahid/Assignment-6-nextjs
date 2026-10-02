import { Oswald } from 'next/font/google';
import React from 'react';
import { CiDumbbell } from 'react-icons/ci';

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Footer = () => {
    return (
        <div className='pb-12 pt-5 flex justify-between'>
            <div className='font-bold flex justify-items-start gap-2'>
                <CiDumbbell className='text-[#C2F800] h-6 w-6' />
                <h2 className={` ${oswald.className}`}>FITLOG</h2>
            </div>
            <div>
                <p className='text-gray-600 text-[0.875rem]'>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
            </div>
        </div>
    );
};

export default Footer;