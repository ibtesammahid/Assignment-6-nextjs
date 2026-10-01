"use client";
import { ExerciseContext } from '@/Context/ExerciseContext';
import { Exercise } from '@/Types/excercise';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const AddToday = ({ exercise }: { exercise: Exercise }) => {

    const { exerciseData, setExerciseData } = useContext(
      ExerciseContext as unknown as React.Context<{
        exerciseData: Exercise[];
        setExerciseData: React.Dispatch<React.SetStateAction<Exercise[]>>;
      }>
    );
    console.log(exerciseData, "ExerciseData from AddToday component");

const handleAddToToday = () => {
  setExerciseData((prev) => {
    const alreadyExists = prev.some(
      (item) => item.id === exercise.id
    );

    if (alreadyExists) {
      toast.info(`${exercise.name} is already in today's plan!`);
      return prev;
    }

    toast.success(`${exercise.name} has been added to today's plan!`);

    return [...prev, exercise];
  });
};
    return (
        <div>
                   <button
                className="
                  rounded-md
                  bg-lime-400
                  px-3
                  py-2
                  text-[9px]
                  font-bold
                  text-black
                  transition
                  hover:bg-lime-300
                  sm:text-[10px]
                "
                onClick={() => handleAddToToday()}
              >
                Add to today&apos;s plan
              </button>

        </div>
    );
};

export default AddToday;