import { Toolbar } from "../components/toolbar";
import { useSession, getSession } from "next-auth/react";
function BookMark({ articles }) {
  const { data: session } = useSession();
  if (!session) {
    return (
      <>
        <Toolbar />
        {/* <div>{data.c}</div> */}
        <div className="text-center font-bold text-4xl mt-[10%]">
          Please SignIn to continue!!!
        </div>
      </>
    );
  }
  return (
    <>
      <Toolbar />
      <div className="grid grid-cols-2 gap-8">
        {articles.map((article, index) => (
          <div
            onClick={() => (window.location.href = article.url)}
            className="flex flex-col p-10 justify-around cursor-pointer shadow-2xl"
            key={index}
          >
            <h1 className="font-bold text-2xl text-center justify-center border-b-[5px] border-red-700 p-1">
              {article.title}
            </h1>
            <p className="my-5">{article.description}</p>
            <img className="w-[50%] h-[50%] self-center" src={article.image} />
          </div>
        ))}
      </div>
    </>
  );
}

export default BookMark;

export const getServerSideProps = async (pageContext) => {
  let articles=[]
  const session = await getSession(pageContext)
  if(session){
    await fetch(process.env.NEXT_PUBLIC_APP_URL+"/api/dis", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body:JSON.stringify({
      email:session.user.email||null
    })
  }).then((res) => res.json())
  .then((response) => articles=response)
  .catch((error) => console.log(error));
  }
  return {
    props: {
      articles,
    },
  };
};
