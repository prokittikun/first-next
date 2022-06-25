import { RootState } from "@/store/root";
import { countActions } from "@/store/slice/counterSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Index: React.FC = () => {
  const count = useSelector((state: RootState) => state.countSlice.count);
  const dispatch = useDispatch();
  return (
    <div className="min-w-screen min-h-screen flex flex-col items-center justify-center">
      <div className="w-5/6 lg:w-3/6 rounded-xl bg-gradient-to-b from-blue-600 to-blue-400 mr-3">
        <div className="flex flex-col">
          <div
            id="header"
            className="flex flex-col items-center justify-center text-white py-4 bg-blue-800"
          >
            <div className="text-center uppercase text-2xl">Convert it!</div>
            <div className="text-sm">
              <a
                className="hover:underline"
                href="https://codepen.io/webgleb/full/GRNdeLv"
                target="_blank"
              >
                Live version with JS
              </a>
            </div>
          </div>
          <div id="converters-area" className="px-4 py-5">
            <div className="flex flex-col text-white">
              <div className="flex items-center justify-between mb-5">
                <div className="flex flex-col text-center w-3/6 px-2">
                  <label className="mb-1" htmlFor="weight-kilograms">
                    Weight (kilograms)
                  </label>
                  <input
                    type="number"
                    id="weight-kilograms"
                    className="py-3 px-5 rounded focus:outline-none text-gray-600 focus:text-gray-600"
                  />
                </div>
                <div className="flex flex-col text-center w-3/6 px-2">
                  <label className="mb-1" htmlFor="weight-pounds">
                    Weight (pounds)
                  </label>
                  <input
                    type="number"
                    id="weight-pounds"
                    className="py-3 px-5 rounded focus:outline-none text-gray-600 focus:text-gray-600"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex flex-col text-center w-3/6 px-2">
                  <label className="mb-1" htmlFor="height-metres">
                    Height (metres)
                  </label>
                  <input
                    type="number"
                    id="height-metres"
                    className="py-3 px-5 rounded focus:outline-none text-gray-600 focus:text-gray-600"
                  />
                </div>
                <div className="flex flex-col text-center w-3/6 px-2">
                  <label className="mb-1" htmlFor="height-feet">
                    Height (feet)
                  </label>
                  <input
                    type="number"
                    id="height-feet"
                    className="py-3 px-5 rounded focus:outline-none text-gray-600 focus:text-gray-600"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex flex-col text-center w-3/6 px-2">
                  <label className="mb-1" htmlFor="height-metres">
                    Distance (kilometres)
                  </label>
                  <input
                    type="number"
                    id="distance-kilometres"
                    className="py-3 px-5 rounded focus:outline-none text-gray-600 focus:text-gray-600"
                  />
                </div>
                <div className="flex flex-col text-center w-3/6 px-2">
                  <label className="mb-1" htmlFor="height-feet">
                    Distance (miles)
                  </label>
                  <input
                    type="number"
                    id="distance-miles"
                    className="py-3 px-5 rounded focus:outline-none text-gray-600 focus:text-gray-600"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex flex-col text-center w-3/6 px-2">
                  <label className="mb-1" htmlFor="height-metres">
                    Volume (litres)
                  </label>
                  <input
                    type="number"
                    id="volume-litres"
                    className="py-3 px-5 rounded focus:outline-none text-gray-600 focus:text-gray-600"
                  />
                </div>
                <div className="flex flex-col text-center w-3/6 px-2">
                  <label className="mb-1" htmlFor="height-feet">
                    Volume (gallons)
                  </label>
                  <input
                    type="number"
                    id="volume-gallons"
                    className="py-3 px-5 rounded focus:outline-none text-gray-600 focus:text-gray-600"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between mb-5 text-right">
                <div className="flex flex-col text-right w-3/6 px-2">
                  <label htmlFor="decimals" className="mr-3">
                    Decimals:
                  </label>
                </div>
                <div className="flex flex-col text-center w-3/6 px-2">
                  <select
                    id="decimals"
                    className="appearance-none border-none text-gray-600 py-3 pl-3 pr-8 rounded leading-tight w-32"
                  >
                    <option value={0}>0</option>
                    <option value={1}>1</option>
                    <option value={2} selected>
                      2
                    </option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-sm mt-3">
        Follow me on twitter{"{"}" "{"}"}
        <a
          href="https://twitter.com/devgleb"
          className="text-blue-600 hover:underline"
          target="_blank"
        >
          @devgleb
        </a>
      </div>
    </div>
  );
};

export default Index;
