"use client";

import { ExerciseContext } from "@/Context/ExerciseContext";
import { Exercise } from "@/Types/excercise";
import React, { useContext } from "react";
import { CiBookmark } from "react-icons/ci";
import { toast } from 'react-toastify';

const SaveLater = ({ exercise }: { exercise: Exercise }) => {
  const { savedExercises, setSavedExercises } =
    useContext(ExerciseContext);

  const handleSaveForLater = () => {
    const alreadySaved = savedExercises.some(
      (item) => item.id === exercise.id
    );

    if (alreadySaved) {
      toast.error(`${exercise.name} is already saved!`);
      return;
    }

    setSavedExercises((prev) => [...prev, exercise]);

    toast.success(`${exercise.name} has been saved for later!`);
  };

  return (
    <button
      className="
        rounded-md
        border
        border-gray-700
        bg-[#151820]
        px-3
        py-2
        text-[9px]
        text-gray-300
        transition
        hover:border-gray-500
        hover:text-white
        sm:text-[10px]
        flex items-center gap-1
        cursor-pointer
      "
       onClick={() => handleSaveForLater()}
      >
        <CiBookmark className='text-xl' />
      Save for Later
    </button>
  );
};

export default SaveLater;