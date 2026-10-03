import React from "react";
import WorkoutCard from "./WorkoutCard";
import { Exercise } from "@/Types/excercise";

const getCards = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await res.json();
  return data;
};

const LibraryCard = async () => {
  const getExercise = await getCards();
  console.log(getExercise, "Librarycard Component ");
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 gap-y-8 py-10">
      {getExercise.map((exercise: Exercise) => {
        return <WorkoutCard key={exercise.id} exercise={exercise} />;
      })}
    </div>
  );
};

export default LibraryCard;
