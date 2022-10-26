import { useRouter } from "next/router";
import Logo from "./images/index.jpeg";
import Image from "next/image";
import Gif1 from "./images/news2.gif";
import {SlHome} from "react-icons/sl";

export const Toolbar = () => {
  const router = useRouter();
  return (
    <div>
      <div className=" flex flex-row ">
        <div className="w-[120px] h-[120px]">
        <Image  src={Logo}></Image></div>
        <div className="w-[520px] h-[100px] ml-[34rem]">
        <Image  src={Gif1}></Image></div>
      </div>
      <div className="flex bg-red-600 text-xl">
        <div
          onClick={() => router.push("/")}
          className="p-8 font-verdana cursor-pointer bold text-white bg-black hover:bg-gray-800" 
        >
          <SlHome/>
        </div>
        <div
          onClick={() => router.push("/headlines/business")}
          className="p-8 font-sans cursor-pointer bold text-white hover:bg-red-500"
        >
          Business
        </div>
        <div
          onClick={() => router.push("/headlines/entertainment")}
          className="p-8 font-sans cursor-pointer bold text-white hover:bg-red-500"
        >
          Entertainment
        </div>
        <div
          onClick={() => router.push("/headlines/general")}
          className="p-8 font-sans cursor-pointer bold text-white hover:bg-red-500"
        >
          General
        </div>
        <div
          onClick={() => router.push("/headlines/health")}
          className="p-8 font-sans cursor-pointer bold text-white hover:bg-red-500"
        >
          Health
        </div>
        <div
          onClick={() => router.push("/headlines/science")}
          className="p-8 font-sans cursor-pointer bold text-white hover:bg-red-500"
        >
          Science
        </div>
        <div
          onClick={() => router.push("/headlines/sports")}
          className="p-8 font-sans cursor-pointer bold text-white hover:bg-red-500"
        >
          Sports
        </div>
        <div
          onClick={() => router.push("/headlines/technology")}
          className="p-8 font-sans cursor-pointer bold text-white hover:bg-red-500"
        >
          Technology
        </div>
      </div>
    </div>
  );
};
