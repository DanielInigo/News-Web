import {Toolbar} from "../components/toolbar";
import {getSession,signIn} from "next-auth/react";
import {useState,useEffect} from 'react';
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
                <div className="text-center font-bold text-4xl mt-[10%]">Please SignIn to continue!!!</div>
            </>
        )
    }
    return(
        <>
            <Toolbar/>
            <div>Bookmarks</div>
        </>
    )
}

export default BookMark;