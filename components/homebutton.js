import { useRouter } from "next/router";
export default function homeButton(props){
    const router=useRouter();
    const c=props.cy;
    const temp='/country/'+c;
    return(
        <div
            onClick={() => router.push(temp)}
            className="but w-[50%] font-bold bg-red-700 rounded-full p-3 text-white cursor-pointer text-center"
          >
            Display News Feed
          </div>
    )
}