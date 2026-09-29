import Banner from "./Components/Banner";
import LibraryCard from "./Components/LibraryCard";

export default function Home() {
  return (
    <div>
      <Banner />
      <h2 className="text-2xl font-bold text-white pt-20">THE LIBRARY</h2>
      <p className="text-gray-400 text-[0.875rem]">Twelve lifts covering every major muscle group.</p>
      <LibraryCard />
    </div>
  );
}
