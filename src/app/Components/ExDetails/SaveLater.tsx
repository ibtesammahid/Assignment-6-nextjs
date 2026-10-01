"use client";

import { ExerciseContext } from "@/Context/ExerciseContext";
import { Exercise } from "@/Types/excercise";
import React, { useContext } from "react";
import { toast } from "react-toastify/unstyled";

const SaveLater = ({ exercise }: { exercise: Exercise }) => {
  const { savedExercises, setSavedExercises } =
    useContext(ExerciseContext);

  const handleSaveForLater = () => {
    // console.log("Before:", savedExercises);
    // console.log("Adding:", exercise);

    setSavedExercises((prev) => {
      console.log("Previous state:", prev);
      return [...prev, exercise];
    });

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
      "
      onClick={handleSaveForLater}
    >
      Save for Later
    </button>
  );
};

export default SaveLater;