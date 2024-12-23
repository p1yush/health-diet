import { IoSearchCircleSharp } from "react-icons/io5";

export default function Home() {
  return (
    <>
      <div className="bg-black w-full">
        <h1 className="text-white font-bold text-3xl text-center p-10">
          CalorieTracker
        </h1>
        <div className="relative w-full max-w-xl mx-auto pb-10">
          <input
            placeholder="Search"
            className="rounded-full w-full h-12 py-2 pl-8 pr-20 outline-none border-2 border-gray-100 shadow-md hover:outline-none"
            type="text"
            name="query"
            id="query"
          />
          <button
            type="submit"
            className="absolute inline-flex items-center h-7 transition duration-150 ease-in-out rounded-full outline-none right-0 top-3 sm:px-6 sm:text-base sm:font-medium focus:outline-none"
          >
            <IoSearchCircleSharp size={50} color="black" />
          </button>
        </div>
      </div>
      <div>
        <h1 className="text-center font-semibold text-2xl m-3">Fish and Chips have total of 136.5 calories</h1>
        <div className="bg-red-400 w-vw rounded-lg h-96 m-3">

        </div>
        <div className="bg-red-400 w-vw rounded-lg h-96 m-3">

        </div>
      </div>
    </>
  );
}
