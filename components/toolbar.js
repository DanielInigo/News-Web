import { useRouter } from "next/router";
import Logo from "./images/index.jpeg";
import Image from "next/image";
import Gif1 from "./images/news2.gif";

export const Toolbar = () => {
  const router = useRouter();
  return (
    <div>
      <div className=" flex flex-row ">
        <div className="w-[120px] h-[120px]">
        <Image  src={Logo}></Image></div>
        {/* <div className="w-[520px] h-[100px] ml-[34rem]">
        <Image  src={Gif1}></Image></div> */}
      </div>
      <div className="flex bg-red-600 py-[1.6%] pl-[43.5%] text-xl">
        <div
          onClick={() => router.push("/")}
          className="mr-10 font-verdana cursor-pointer bold text-white"
        >
          Home
        </div>
        <div
          onClick={() => router.push("/feed/1")}
          className="mr-10 font-sans cursor-pointer bold text-white"
        >
          Feed
        </div>
        <div
          onClick={() => router.push("/starred")}
          className="mr-10 font-sans cursor-pointer bold text-white"
        >
          Starred
        </div>
      </div>
    </div>
  );
};
