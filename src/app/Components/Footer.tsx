import { Oswald } from "next/font/google";
import React from "react";
import { CiDumbbell } from "react-icons/ci";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Footer = () => {
  return (
    <footer className="py-5 sm:py-8">
      {" "}
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        {" "}
        {/* Logo */}{" "}
        <div className="flex items-center gap-2 font-bold">
          {" "}
          <CiDumbbell className="h-6 w-6 text-[#C2F800]" />{" "}
          <h2 className={oswald.className}>FITLOG</h2>{" "}
        </div>{" "}
        {/* Copyright */}{" "}
        <p className="text-sm text-gray-600">
          {" "}
          © 2026 FitLog — Workout Library. Train hard, log honest.{" "}
        </p>{" "}
      </div>{" "}
    </footer>
  );
};
export default Footer;
