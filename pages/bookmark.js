import {Toolbar} from "../components/toolbar";
import {getSession,signIn} from "next-auth/react";
import {useState,useEffect} from 'react';
import {ob} from "../pages/headlines/[category]"
import {ob1} from "../pages/country/[param]"

function BookMark(){
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
        const securePage=async()=>{
            const session=await getSession() 
            if(session){
                setLoading(false)
            } 
        }
        securePage()
    },[])
    if(loading){
        return(
            <>
                <Toolbar/>
                {/* <div>{data.c}</div> */}
                <div className="text-center font-bold text-4xl mt-[10%]">Please SignIn to continue!!!</div>
            </>
        )
    }
    return(
        <>
            <Toolbar/>
            <div className="grid grid-cols-2 gap-8">
          {ob.map((article, index) => (
            <div
              onClick={() => (window.location.href = article.url)}
              className="flex flex-col p-10 justify-around cursor-pointer shadow-2xl"
              key={index}
            >
              <h1
                className="font-bold text-2xl text-center justify-center border-b-[5px] border-red-700 p-1"
              >
                {article.title}
              </h1>
              <p className="my-5">{article.desc}</p>
            <img className="w-[50%] h-[50%] self-center" src={article.im} />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-8">
          {ob1.map((article, index) => (
            <div
              onClick={() => (window.location.href = article.url)}
              className="flex flex-col p-10 justify-around cursor-pointer shadow-2xl"
              key={index}
            >
              <h1
                className="font-bold text-2xl text-center justify-center border-b-[5px] border-red-700 p-1"
              >
                {article.title}
              </h1>
              <p className="my-5">{article.desc}</p>
            <img className="w-[50%] h-[50%] self-center" src={article.im} />
            </div>
          ))}
        </div>
        </>
    )
}

export default BookMark;