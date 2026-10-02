"use client";
import { ExerciseContext } from '@/Context/ExerciseContext';
import { Exercise } from '@/Types/excercise';
import React, { useContext } from 'react';
import { MdOutlinePlaylistAdd } from 'react-icons/md';
import { toast } from 'react-toastify';

const AddToday = ({ exercise }: { exercise: Exercise }) => {
  const { exerciseData, setExerciseData } =
    useContext(ExerciseContext);

  const handleAddToToday = () => {
    const alreadyExists = exerciseData.some(
      (item) => item.id === exercise.id
    );

    if (alreadyExists) {
      toast.error(`${exercise.name} is already in today's plan!`);
      return;
    }

    setExerciseData((prev) => [...prev, exercise]);

    toast.success(
      `${exercise.name} has been added to today's plan!`
    );
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
                  flex items-center gap-1
                  cursor-pointer
                "
                onClick={() => handleAddToToday()}
              >
                <MdOutlinePlaylistAdd className='text-xl' />

                Add to today&apos;s plan
              </button>

        </div>
    );
};

export default AddToday;