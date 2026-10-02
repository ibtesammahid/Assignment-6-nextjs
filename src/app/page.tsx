import { Oswald } from "next/font/google";
import Banner from "./Components/Banner";
import LibraryCard from "./Components/LibraryCard";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  return (
    <div>
      <Banner />
      <h2 className={`text-2xl font-bold text-white pt-20 ${oswald.className}`}>THE LIBRARY</h2>
      <p className="text-gray-400 text-[0.875rem]">Twelve lifts covering every major muscle group.</p>
      <LibraryCard />
    </div>
  );
}
