import Image from "next/image";
import Navbar from "@/app/components/navbar";

export default function Home() {
  return (
    <div className="h-screen">
      <Navbar></Navbar>
      <main className="flex justify-between items-center px-32 ">
        <div className="w-[50%] md:-mt-20 space-y-5">
          <h1 className="flex text-5xl line-h w-[30rem] font-medium text-gray-800">Grow, Explore, and Relax in a Virtual Oasis</h1>
          <p className="w-[30rem] text-gray-800">
            Discover a dynamic garden where you can plant, nurture, and watch your creations thrive. Unwind in a vibrant oasis designed to spark your imagination and soothe your mind</p>
          <div className="space-x-5">
            <button className="bg-[#318162] py-2 px-5 shadow-lg rounded-full text-white">Explore Now</button>
            <button className="border-2 border-[#318162] py-2 px-5 text-gray-800 rounded-full ">🌱 Know More</button>
          </div>
        </div>
        <div className="w-[50%]">
          <img className="top-0" src="/plant.png" alt="" />
        </div>
      </main>
    </div>
  );
}
