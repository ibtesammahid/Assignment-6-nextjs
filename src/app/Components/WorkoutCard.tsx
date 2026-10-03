import { Exercise } from "@/Types/excercise";
import { Oswald } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiStar } from "react-icons/ci";
import { FaRegClock } from "react-icons/fa";
import { IoFlame } from "react-icons/io5";

interface WorkoutCardProps {
  exercise: Exercise;
}

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const WorkoutCard = ({ exercise }: WorkoutCardProps) => {
  return (
    <Link
      href={`/workout/${exercise.id}`}
      className="hover:scale-101 transition-all hover:border-[0.1px] border-[#C2F800] rounded-2xl"
    >
      <div className="w-full   overflow-hidden rounded-2xl border border-gray-800 bg-[#15161b] text-white shadow-lg">
        {/* Image */}
        <div className="relative h-[180px] w-full">
          <Image
            src={exercise.image}
            alt={exercise.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Card Content */}
        <div className="p-5">
          {/* Difficulty + Muscle Groups */}
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-[#C2F800] px-3 py-1 text-xs font-bold uppercase text-black">
              {exercise.difficulty}
            </span>

            {exercise.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-[#C2F800] px-3 py-1 text-xs font-bold uppercase text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          {/* Exercise Name */}
          <h2
            className={`text-xl font-bold uppercase tracking-wide ${oswald.className}`}
          >
            {exercise.name}
          </h2>

          {/* Equipment */}
          <p className="mt-1 text-sm text-gray-400">{exercise.equipment}</p>

          {/* Divider */}
          <div className="my-4 border-t border-gray-800" />

          {/* Stats */}
          <div className="flex items-center gap-5 text-sm text-gray-400">
            {/* Duration */}
            <div className="flex items-center gap-1.5">
              <FaRegClock size={16} className="text-[#C2F800]" />
              <span>{exercise.duration} min</span>
            </div>

            {/* Calories */}
            <div className="flex items-center gap-1.5">
              <IoFlame size={16} className="text-[#C2F800]" />
              <span>{exercise.caloriesBurned} kcal</span>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-1.5">
              <CiStar size={16} className="text-[#C2F800]" />
              <span>{exercise.rating}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default WorkoutCard;
