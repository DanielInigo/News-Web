import { useRouter } from "next/router";
import Logo from "./images/index.jpeg";
import Image from "next/image";
import Gif1 from "./images/news2.gif";
import { SlHome } from "react-icons/sl";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export const Toolbar = () => {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <div>
      <div className=" flex flex-row ">
        <div className="w-[120px] h-[120px]">
          <Image src={Logo}></Image>
        </div>
        <div className="w-[520px] h-[100px] ml-[34rem]">
          <Image src={Gif1}></Image>
        </div>
      </div>
      <div className="flex bg-red-600 text-xl">
        <div
          onClick={() => router.push("/")}
          className="p-8 font-verdana cursor-pointer bold text-white bg-black hover:bg-gray-800"
        >
          <SlHome />
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
          onClick={() => router.push("/headlines/environment")}
          className="p-8 font-sans cursor-pointer bold text-white hover:bg-red-500"
        >
          Environment
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
        <div
              onClick={() => router.push("/bookmark")}
              className="p-8 font-sans cursor-pointer bold text-white hover:bg-red-500"
            >
              Bookmarks
            </div>
        {!session && (
            <div
              onClick={(e) => {
                e.preventDefault();
                signIn();
              }}
              className="p-8 font-sans cursor-pointer bold text-white hover:bg-red-500"
            >
              <Link href="/api/auth/signin">SignIn</Link>
            </div>
        )}
        {session && (
          <div className="flex">
            <div
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
              className="p-8 font-sans cursor-pointer bold text-white hover:bg-red-500"
            >
              <Link href="/api/auth/signout">SignOut</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
