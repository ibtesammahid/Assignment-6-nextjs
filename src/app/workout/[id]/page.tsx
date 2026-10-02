import AddToday from "@/app/Components/ExDetails/AddToday";
import SaveLater from "@/app/Components/ExDetails/SaveLater";
import { Exercise } from "@/Types/excercise";
import { Oswald } from "next/font/google";
import Image from "next/image";


const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface DetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getCards = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  const data = await res.json();
  return data;
};

const DetailsPage = async ({ params }: DetailsPageProps) => {
  const { id } = await params;

  const exerciseDetails = await getCards();

  const exercise = exerciseDetails.find(
    (exercise: Exercise) => String(exercise.id) === String(id)
  ) as Exercise;

  return (
    <main className="min-h-screen bg-[#0d0f13] px-4 py-6 text-white sm:px-6 sm:py-8 lg:px-8 lg:py-10">

      {/* Main Container */}
      <div className="mx-auto max-w-6xl">

        {/* Main Layout */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">

          {/* =========================
              LEFT - IMAGE
          ========================== */}
          <div className="w-full overflow-hidden rounded-xl">

            <Image
              src={exercise.image}
              alt={exercise.name}
              width={700}
              height={700}
              priority
              className="
                h-[300px]
                w-full
                object-cover
                sm:h-[400px]
                md:h-full
                md:min-h-[500px]
                lg:min-h-[560px]
              "
            />

          </div>


          {/* =========================
              RIGHT - CONTENT
          ========================== */}
          <div className="flex min-w-0 flex-col">

            {/* Exercise Name */}
            <h1 className={`text-xl font-bold uppercase leading-tight sm:text-2xl lg:text-3xl ${oswald.className}`}>
              {exercise.name}
            </h1>


            {/* Description */}
            <p className="mt-2 text-xs leading-relaxed text-gray-400 sm:text-sm">
              {exercise.description}
            </p>


            {/* =========================
                BADGES
            ========================== */}
            <div className="mt-3 flex flex-wrap gap-2">

              {exercise.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="
                    rounded-md
                    bg-lime-400
                    px-2.5
                    py-1
                    text-[9px]
                    font-bold
                    uppercase
                    text-black
                    sm:text-[10px]
                  "
                >
                  {muscle}
                </span>
              ))}

              <span
                className="
                  rounded-md
                  bg-lime-400
                  px-2.5
                  py-1
                  text-[9px]
                  font-bold
                  uppercase
                  text-black
                  sm:text-[10px]
                "
              >
                {exercise.difficulty}
              </span>

            </div>


            {/* =========================
                DETAILS TABLE
            ========================== */}
            <div className="mt-4 w-full overflow-hidden rounded-lg border border-gray-800 bg-[#151820]">

              {[
                {
                  label: "Equipment",
                  value: exercise.equipment,
                },
                {
                  label: "Difficulty",
                  value: exercise.difficulty,
                },
                {
                  label: "Sets",
                  value: exercise.sets,
                },
                {
                  label: "Reps",
                  value: exercise.reps,
                },
                {
                  label: "Duration",
                  value: `${exercise.duration} min`,
                },
                {
                  label: "Calories",
                  value: `${exercise.caloriesBurned} kcal`,
                },
                {
                  label: "Rating",
                  value: exercise.rating,
                },
              ].map((item, index, array) => (
                <div
                  key={item.label}
                  className={`
                    flex
                    items-center
                    justify-between
                    gap-4
                    px-3
                    py-2.5
                    sm:px-4
                    sm:py-3
                    ${
                      index !== array.length - 1
                        ? "border-b border-gray-800"
                        : ""
                    }
                  `}
                >

                  {/* Label */}
                  <span className="shrink-0 text-[9px] font-bold uppercase tracking-wide text-gray-500 sm:text-[10px]">
                    {item.label}
                  </span>

                  {/* Value */}
                  <span className="min-w-0 wrap-break-word text-right text-[9px] text-gray-200 sm:text-[10px]">
                    {item.value}
                  </span>

                </div>
              ))}

            </div>


            {/* =========================
                INSTRUCTIONS
            ========================== */}
            <div className="mt-5">

              <h2 className="text-xs font-bold uppercase tracking-wide">
                Instructions
              </h2>

              <ol className="mt-2 space-y-1.5">

                {exercise.instructions.map((instruction, index) => (
                  <li
                    key={index}
                    className="flex gap-2 text-[10px] leading-relaxed text-gray-400 sm:text-[10px]"
                  >

                    <span className="w-3 shrink-0 text-gray-500">
                      {index + 1}.
                    </span>

                    <span>
                      {instruction}
                    </span>

                  </li>
                ))}

              </ol>

            </div>


            {/* =========================
                BUTTONS
            ========================== */}
            <div className="mt-5 flex flex-wrap gap-2 sm:gap-3">

            <AddToday exercise={exercise} />
            <SaveLater exercise={exercise} />
        

            </div>

          </div>
        </div>

      </div>
    </main>
  );
};

export default DetailsPage;