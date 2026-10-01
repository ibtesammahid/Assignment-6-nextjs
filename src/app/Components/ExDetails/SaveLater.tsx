"use client";

import { ExerciseContext } from "@/Context/ExerciseContext";
import { Exercise } from "@/Types/excercise";
import React, { useContext } from "react";
import { toast } from 'react-toastify';

const SaveLater = ({ exercise }: { exercise: Exercise }) => {
  const { savedExercises, setSavedExercises } =
    useContext(ExerciseContext);

const handleSaveForLater = () => {
  setSavedExercises((prev) => {
    const alreadySaved = prev.some(
      (item) => item.id === exercise.id
    );

    if (alreadySaved) {
      toast.info(`${exercise.name} is already saved!`);
      return prev;
    }

    toast.success(`${exercise.name} has been saved for later!`);

    return [...prev, exercise];
  });
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
      "
       onClick={() => handleSaveForLater()}
      >
      Save for Later
    </button>
  );
};

export default SaveLater;