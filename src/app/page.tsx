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
      <div className="flex justify-center">
      <div className="p-1 border-2 border-black font-sans w-72 m-2 rounded-xl">
        <div className="text-4xl font-extrabold leading-none">
          Nutrition Facts
        </div>
        <div className="leading-snug">1 serving</div>
        <div className="flex justify-between font-bold border-b-8 border-black">
          <div>Serving size</div>
          <div>100g</div>
        </div>
        <div className="flex justify-between items-end font-extrabold">
          <div>
            <div className="font-bold">Amount per serving</div>
            <div className="text-4xl">Calories</div>
          </div>
          <div className="text-5xl">261</div>
        </div>
        <div className="border-t-4 border-black text-sm pb-1">
          <div className="text-right font-bold pt-1 pb-1">% Daily value*</div>
          <hr className="border-gray-500" />
          <div className="flex justify-between">
            <div>
              <span className="font-bold">Total Fat</span> 17g
            </div>
            <div className="font-bold">22%</div>
          </div>
          <hr className="border-gray-500" />
          <div className="flex justify-between">
            <div>Saturated Fat 7.1g</div>
            <div className="font-bold">36%</div>
          </div>
          <hr className="border-gray-500" />
          <div>
            <span className="italic">Trans Fat</span> 0.6g
          </div>
          <div>
            <span>Polyunsaturated Fat</span> 4.8g
          </div>
          <div>
            <span>Monounsaturated Fat</span> 4.2g
          </div>
          <hr className="border-gray-500" />
          <div className="flex justify-between">
            <div>
              <span className="font-bold">Cholesterol</span> 27mg
            </div>
            <div className="font-bold">9%</div>
          </div>
          <hr className="border-gray-500" />
          <div className="flex justify-between">
            <div>
              <span className="font-bold">Sodium</span> 423mg
            </div>
            <div className="font-bold">18%</div>
          </div>
          <hr className="border-gray-500" />
          <div className="flex justify-between">
            <div>
              <span className="font-bold">Total Carbohydrate</span> 24g
            </div>
            <div className="font-bold">9%</div>
          </div>
          <hr className="border-gray-500" />
          <div className="flex justify-between">
            <div className="pl-4">Dietary Fiber 2.1g</div>
            <div className="font-bold">8%</div>
          </div>
          <hr className="border-gray-500" />
          <div className="pl-4">Total Sugar 1.6g</div>
          <hr className="border-gray-500" />
          <div>
            <span className="font-bold">Protein</span> 3.5g
          </div>
        </div>
        <div className="border-t-8 border-black pt-1 text-sm">
          <div className="flex justify-between">
            <div>Vitamin D 0.2mcg</div>
            <div className="font-bold">1%</div>
          </div>
          <hr className="border-gray-500" />
          <div className="flex justify-between">
            <div>Calcium 17mg</div>
            <div className="font-bold">1%</div>
          </div>
          <hr className="border-gray-500" />
          <div className="flex justify-between">
            <div>Iron 0.7mg</div>
            <div className="font-bold">4%</div>
          </div>
          <hr className="border-gray-500" />
          <div className="flex justify-between">
            <div>Potassium 189.1mg</div>
            <div className="font-bold">4%</div>
          </div>
          <div className="border-t-4 border-black flex leading-none text-xs pt-2 pb-1">
            <div className="pr-1">*</div>
            <div>
              The % Daily Value (DV) tells you how much a nutrient in a serving
              of food contributes to a daily diet. 2,000 calories a day is used
              for general nutrition advice.
            </div>
          </div>
        </div>
      </div>
      <div className="p-1 border-2 border-black font-sans w-72 m-2">

      </div>
      </div>
    </>
  );
}
