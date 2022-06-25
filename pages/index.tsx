import { RootState } from "@/store/root";
import { countActions } from "@/store/slice/counterSlice";
import React, { useState } from "react";
const Index: React.FC = () => {
  const [first, setFirst] = useState<any>("");

  return (
    <div className="min-w-screen min-h-screen flex flex-col items-center justify-center">
      <div className="w-5/6 lg:w-3/6  shadow-lg rounded-xl bg-gradient-to-b from-blue-600 to-blue-400 mr-3">
        <div className="flex flex-col">
          <div
            id="header"
            className="flex flex-col items-center justify-center text-white py-4 "
          >
            <div className="text-center uppercase text-3xl tracking-widest font-extrabold">
              Login
            </div>
          </div>
          <div className="px-7 py-8">
            <div className=" text-white">
              <div className=" mb-5">
                <div className=" w-6/6 px-2 mb-7">
                  <label className="mb-1 text-2xl" htmlFor="weight-kilograms">
                    Username
                  </label>
                  <input
                    type="text"
                    id="weight-kilograms"
                    className="py-3 px-5 w-full rounded focus:outline-none text-gray-600 focus:text-gray-600"
                  />
                </div>
                <div className=" w-6/6 px-2 ">
                  <label className="mb-1 text-2xl" htmlFor="weight-pounds">
                    Password
                  </label>
                  <input
                    type="text"
                    id="weight-pounds"
                    className="py-3 px-5 w-full rounded focus:outline-none text-gray-600 focus:text-gray-600"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-center items-center">
                <button className="bg-sky-400 hover:bg-sky-300 text-white font-bold p-3 border-b-4 border-blue-700 hover:border-blue-400 lg:w-96 md:w-96 xs:w-32 rounded">
                  LOGIN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
