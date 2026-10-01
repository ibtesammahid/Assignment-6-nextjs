"use client";

import React, { useContext, useMemo, useState } from "react";
// import type { Exercise } from "@/Types/excercise";
import Link from "next/link";
import { ExerciseContext } from "@/Context/ExerciseContext";
import { FaFire, FaRegClock, FaRegStar } from "react-icons/fa";
import Image from "next/image";
import { CiCircleRemove } from "react-icons/ci";
import { toast } from "react-toastify";


const MyPlanPage = () => {
  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

  const { exerciseData, setExerciseData, savedExercises, setSavedExercises } =
    useContext(ExerciseContext);
  console.log(exerciseData, "Exercise data paisi");

  //   const [savedExercises] = useState<Exercise[]>([]);

  const [sortBy, setSortBy] = useState("duration");
  const [completedExerciseIds, setCompletedExerciseIds] = useState<Set<number>>(
    new Set(),
  );

  /*
   * Calculate summary dynamically
   */
  const currentExercises =
    activeTab === "today" ? exerciseData : savedExercises;

  const totalExercises = currentExercises.length;

  const totalMinutes = currentExercises.reduce(
    (total, exercise) => total + exercise.duration,
    0,
  );

  const totalCalories = currentExercises.reduce(
    (total, exercise) => total + exercise.caloriesBurned,
    0,
  );

  /*
   * Sort exercises dynamically
   */
  const displayedExercises = useMemo(() => {
    const exercises =
      activeTab === "today" ? (exerciseData ?? []) : (savedExercises ?? []);

    return [...exercises].sort((a, b) => {
      if (sortBy === "duration") {
        return a.duration - b.duration;
      }

      if (sortBy === "calories") {
        return a.caloriesBurned - b.caloriesBurned;
      }

      if (sortBy === "rating") {
        return b.rating - a.rating;
      }

      return 0;
    });
  }, [activeTab, exerciseData, savedExercises, sortBy]);

const handleRemove = (id: number) => {
  const exerciseList =
    activeTab === "today" ? exerciseData : savedExercises;

  const exercise = exerciseList.find((item) => item.id === id);

  if (!exercise) return;

  if (activeTab === "today") {
    setExerciseData((current) =>
      current.filter((item) => item.id !== id)
    );
  } else {
    setSavedExercises((current) =>
      current.filter((item) => item.id !== id)
    );
  }

  toast.error(`${exercise.name} has been removed from your plan!`);
};

const handleMarkAsDone = (id: number) => {
  const exercise = exerciseData.find(
    (item) => item.id === id
  );

  if (!exercise) return;

  setCompletedExerciseIds((current) => {
    const updated = new Set(current);
    updated.add(id);
    return updated;
  });

  toast.success(`${exercise.name} completed!`);
};

  return (
    <main className="min-h-screen bg-[#0d0f13] px-4 py-8 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* =========================
            PAGE HEADER
        ========================== */}

        <div>
          <h1 className="text-2xl font-bold uppercase">My Plan</h1>

          <p className="mt-1 text-sm text-gray-500">
            Cap of five lifts for today. Finish them, then load more.
          </p>
        </div>

        {/* =========================
            SUMMARY
        ========================== */}

        <div className="mt-6 grid grid-cols-1 overflow-hidden rounded-xl border border-gray-800 bg-[#151820] sm:grid-cols-3">
          {/* Exercises */}
          <div className="border-b border-gray-800 px-5 py-5 sm:border-b-0 sm:border-r">
            <p className="text-xs text-gray-500">Exercises</p>

            <p className="mt-1 text-2xl font-bold text-lime-400">
              {totalExercises}
            </p>
          </div>

          {/* Minutes */}
          <div className="border-b border-gray-800 px-5 py-5 sm:border-b-0 sm:border-r">
            <p className="text-xs text-gray-500">Minutes</p>

            <p className="mt-1 text-2xl font-bold">{totalMinutes}</p>
          </div>

          {/* Calories */}
          <div className="px-5 py-5">
            <p className="text-xs text-gray-500">Calories</p>

            <p className="mt-1 text-2xl font-bold">{totalCalories}</p>
          </div>
        </div>

        {/* =========================
            FILTER / SORT
        ========================== */}

        <div className="mt-5 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          {/* Tabs */}
          <div className="flex w-fit rounded-lg border border-gray-800 bg-[#151820] p-1">
            <button
              onClick={() => setActiveTab("today")}
              className={`rounded-md px-4 py-2 text-xs transition ${
                activeTab === "today"
                  ? "bg-[#20242d] text-lime-400"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              Today&apos;s Plan
            </button>

            <button
              onClick={() => setActiveTab("saved")}
              className={`rounded-md px-4 py-2 text-xs transition ${
                activeTab === "saved"
                  ? "bg-[#20242d] text-lime-400"
                  : "text-gray-500 hover:text-white"
              }`}
            >
              Saved
            </button>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500">Sort By</span>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="rounded-md border border-gray-800 bg-[#151820] px-3 py-2 text-xs text-gray-300 outline-none"
            >
              <option value="duration">Duration</option>

              <option value="calories">Calories</option>

              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        {/* =========================
            EXERCISES
        ========================== */}

        <div className="mt-4">
          {displayedExercises.length === 0 ? (
            /* Empty state */
            <div className="flex min-h-62.5 flex-col items-center justify-center rounded-xl border border-dashed border-gray-800">
              <h2 className="text-sm font-bold uppercase">Nothing here yet</h2>

              <p className="mt-2 text-xs text-gray-500">
                Browse the library and add a lift to get moving.
              </p>

              <Link href="/">
                <button className="mt-4 rounded-full bg-lime-400 px-5 py-2 text-xs font-bold text-black transition hover:bg-lime-300">
                  Go to workouts
                </button>
              </Link>
            </div>
          ) : (
            /* Exercise list */
            <div className="space-y-3 py-4">
              {displayedExercises.map((exercise) => (
                <div
                  key={exercise.id}
                  className="flex items-center justify-between rounded-xl border border-gray-800 bg-[#151820] p-4"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={exercise.image}
                      alt={exercise.name}
                      width={60}
                      height={60}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div>
                      <h3 className="text-sm font-bold uppercase">
                        {exercise.name}
                      </h3>

                      <p className="mt-1 text-xs text-gray-500 flex justify-between gap-1 items-center ">
                        <span className="text-lime-400">
                          <FaRegClock />
                        </span>
                        {exercise.duration} min
                        <span className="text-lime-400">
                          <FaFire />
                        </span>
                        {exercise.caloriesBurned} kcal
                        <span className="text-lime-400">
                          <FaRegStar />
                        </span>
                        {exercise.rating}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Link href={`/workout/${exercise.id}`}>
                      <button className="text-xs border border-gray-600 rounded-2xl p-2 hover:text-lime-300 hover:border-lime-300 transition-all">
                        View Details
                      </button>
                    </Link>

                    {activeTab === "today" && (
                      <button
                        onClick={() => handleMarkAsDone(exercise.id)}
                        disabled={completedExerciseIds.has(exercise.id)}
                        className="rounded-2xl border border-lime-400 bg-lime-400 p-2 text-xs font-bold text-black"
                      >
                        {completedExerciseIds.has(exercise.id)
                          ? "Completed ✓"
                          : "Mark as done"}
                      </button>
                    )}

                    <button
                      onClick={() => handleRemove(exercise.id)}
                      className="text-xl text-gray-500 hover:text-red-400"
                    >
                      <CiCircleRemove />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default MyPlanPage;
