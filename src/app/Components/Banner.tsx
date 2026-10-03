import Image from "next/image";
import React from "react";
import BannerImage from "@/assets/banner.png";
import { Oswald } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const Banner = () => {
  return (
    <div className="">
      {" "}
      <div className="flex flex-col lg:flex-row items-center justify-between text-white mt-10 rounded-2xl bg-[#222630] px-5">
        {" "}
        <div className="max-w-4xl m-6 py-6 sm:py-8 lg:py-10">
          {" "}
          <p className="text-[#C2F800] py-3">WORKOUT LIBRARY</p>{" "}
          <h2
            className={`font-bold text-4xl sm:text-5xl lg:text-6xl py-3 ${oswald.className}`}
          >
            {" "}
            TRAIN WITH INTENT. LOG <br className="hidden sm:block" /> EVERY
            SET.{" "}
          </h2>{" "}
          <p className={`text-[#9CA3AF] py-3 max-w-xl`}>
            {" "}
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it{" "}
            <br className="hidden sm:block" /> into today&apos;s plan, and watch
            the week&apos;s work add up.{" "}
          </p>{" "}
          <div className="py-4">
            {" "}
            <a
              href="#Library"
              className="bg-[#C2F800] text-black text-[13px] font-bold py-3 px-3 rounded-md hover:bg-[#a8d500] hover:scale-105 transition-all duration-300 cursor-pointer">
              {" "}
              BROWSE WORKOUTS{" "}
            </a>{" "}
          </div>{" "}
        </div>{" "}
        <div className="w-full lg:w-auto flex justify-center">
          {" "}
          <Image
            src={BannerImage}
            alt="Banner"
            className="w-50 sm:w-80 md:w-96 lg:w-100 h-50 sm:h-80 md:h-96 lg:h-100 "
          />{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default Banner;
