import { Toolbar } from "../components/toolbar";
import Head from "next/head";
import Button from "../components/homebutton"
export default function Home() {
  const handleClick=(e)=>{
    const c=e.target.parentElement.dataset.value;
    console.log(c);
  }
  return (
    <div>
      <Head>
        <title>News App</title>
      </Head>
      <Toolbar />
      <div className="flex flex-col items-center justify-center">
        <h3 className="bold text-4xl mt-7">
          You are one click away from your country
        </h3>
        <div className="flex flex-col shadow-2xl h-[500px] w-[400px] justify-around my-[100px] items-center bg-pink-200">
          <h1 className="text-2xl">Select Country</h1>
          <div className="dropdown inline-block relative">
            <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
              <span className="mr-1">Country</span>
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
              </svg>
            </button>
            <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
              <li onClick={handleClick} data-value="in">
                <a
                  className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  href="#" 
                >
                  India
                </a>
              </li>
              <li className="">
                <a
                  className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  USA
                </a>
              </li>
              <li className="">
                <a
                  className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                  href="#"
                >
                  Canada
                </a>
              </li>
            </ul>
          </div>
          <Button />
        </div>
      </div>
    </div>
  );
}
