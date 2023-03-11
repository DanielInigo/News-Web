import { Toolbar } from "../components/toolbar";
import Head from "next/head";
import Button from "../components/homebutton";
import React, { useState} from "react";

export default function Home() {
  const [ctry, setctry] = useState("");
  const [name,setname]=useState("Country");
  const handleClick = (e) => {
    const c = e.target.parentElement.dataset.value;
    const t=e.target.innerHTML;
    setctry(c);
    setname(t);
  };
  return (
    <div>
      <Head>
        <title>News App</title>
      </Head>
      <Toolbar />
      <div className="flex flex-col items-center justify-center">
        <div className="bg-[url('../components/images/world.jpg')] bg-cover w-[80%] ">
        <h3 className="text-4xl mt-7 text-center">
          You are one click away from your country
        </h3>
        <div className="flex flex-col shadow-2xl h-[500px] w-[400px] justify-around ml-[35%] my-[100px] items-center bg-white">
          <h1 className="font-bold text-2xl">Select Country</h1>
          <div className="dropdown inline-block relative">
            <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
              <span className="mr-1">{name}</span>
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
              </svg>
            </button>
            <ul className="dropdown-menu w-[150%] h-[300%] overflow-auto absolute hidden text-gray-700 pt-1">
              <li onClick={handleClick} data-value="in">
                <div
                  className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap cursor-pointer"
                >
                  India
                </div>
              </li>
              <li onClick={handleClick} data-value="us">
                <div
                  className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap cursor-pointer"
                >
                  USA
                </div>
              </li>
              <li onClick={handleClick} data-value="ca">
                <div
                  className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap cursor-pointer"
                >
                  Canada
                </div>
              </li>
              <li onClick={handleClick} data-value="au">
                <div
                  className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap cursor-pointer"
                >
                  Australia
                </div>
              </li>
              <li onClick={handleClick} data-value="ie">
                <div
                  className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap cursor-pointer"
                >
                  IreLand
                </div>
              </li>
              <li onClick={handleClick} data-value="my">
                <div
                  className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap cursor-pointer"
                >
                  Malaysia
                </div>
              </li>
              <li onClick={handleClick} data-value="ng">
                <div
                  className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap cursor-pointer"
                >
                  Nigeria
                </div>
              </li>
              <li onClick={handleClick} data-value="ph">
                <div
                  className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap cursor-pointer"
                >
                  Philippines
                </div>
              </li>
              <li onClick={handleClick} data-value="sa">
                <div
                  className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap cursor-pointer"
                >
                  Saudi Arabia
                </div>
              </li>
              <li onClick={handleClick} data-value="sg">
                <div
                  className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap cursor-pointer"
                >
                  Singapore
                </div>
              </li>
              <li onClick={handleClick} data-value="za">
                <div
                  className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap cursor-pointer"
                >
                  South Africa
                </div>
              </li>
              <li onClick={handleClick} data-value="gb">
                <div
                  className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap cursor-pointer"
                >
                  United Kingdom
                </div>
              </li>
            </ul>
          </div>
          <Button cy={ctry}/>
        </div>
      </div>
      </div>
    </div>
  );
}