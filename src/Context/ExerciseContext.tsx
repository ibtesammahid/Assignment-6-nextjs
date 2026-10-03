"use client";

import React, {
  createContext,
  ReactNode,
  useState,
  type Dispatch,
  type SetStateAction,
} from "react";

import { Exercise } from "@/Types/excercise";

interface ExerciseContextType {
  exerciseData: Exercise[];
  setExerciseData: Dispatch<SetStateAction<Exercise[]>>;
  savedExercises: Exercise[];
  setSavedExercises: Dispatch<SetStateAction<Exercise[]>>;
}

export const ExerciseContext = createContext<ExerciseContextType>({
  exerciseData: [],
  setExerciseData: () => {},
  savedExercises: [],
  setSavedExercises: () => {},
});

const ExerciseContextProvider = ({ children }: { children: ReactNode }) => {
  const [exerciseData, setExerciseData] = useState<Exercise[]>([]);
  const [savedExercises, setSavedExercises] = useState<Exercise[]>([]);

  return (
    <ExerciseContext.Provider
      value={{
        exerciseData,
        setExerciseData,
        savedExercises,
        setSavedExercises,
      }}
    >
      {children}
    </ExerciseContext.Provider>
  );
};

export default ExerciseContextProvider;
