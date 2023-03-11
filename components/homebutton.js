import { useRouter } from "next/router";
function HomeButton(props){
    const Router=useRouter();
    const c=props.cy;
    const temp='/country/'+c;
    return(
        <div
            onClick={() => Router.push(temp)}
            className="but w-[50%] font-bold bg-red-700 rounded-full p-3 text-white cursor-pointer text-center"
          >
            Display News Feed
          </div>
    )
}

export default HomeButton;