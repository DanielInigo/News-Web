import { useRouter } from "next/router";
import Head from "next/head";
import { Toolbar } from "../../components/toolbar";
import { RiBookmarkFill } from "react-icons/ri";
import { useSession } from "next-auth/react";

export const Feed = ({ articles }) => {
  const { data: session } = useSession();
  const handleClick = async (news) => {
    alert("Successfully Bookmarked!!");
    await fetch(process.env.NEXT_PUBLIC_APP_URL+"/api/book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: news.title,
        description: news.description,
        image: news.image_url,
        url: news.link,
        email: session.user.email,
      }),
    }).then(()=>console.log("done"))
  };
  return (
    <>
      <Head>
        <title>News App</title>
      </Head>
      <div>
        <Toolbar />
        <div className="grid grid-cols-2 gap-8">
          {articles.map((article, index) => (
            <div
              className="flex flex-col p-10 justify-around cursor-pointer shadow-2xl"
              key={index}
            >
              <h1
                onClick={() => (window.location.href = article.link)}
                className="font-bold text-2xl text-center justify-center border-b-[5px] border-red-700 p-1"
              >
                {article.title}
              </h1>
              {!!article.description && (
              <p
                onClick={() => (window.location.href = article.link)}
                className="my-5"
              >
                {article.description}
              </p>
              )}
              {!!article.image_url && (
                <img
                  onClick={() => (window.location.href = article.link)}
                  className="w-[50%] h-[50%] self-center"
                  src={article.image_url}
                />
              )}
              {session && (
                <RiBookmarkFill
                onClick={() => {
                  handleClick(article);
                }}
                className="hover:scale-110 w-[30px] h-[30px]"
              />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async (pageContext) => {
  const country = pageContext.query.param;
  const apiResponse = await fetch(
    `https://newsdata.io/api/1/news?apikey=${process.env.NEXT_PUBLIC_NEWS_KEY}&country=${country}&language=en`,
  );
  const apiJson = await apiResponse.json();
  return {
    props: {
      articles:apiJson.results,
    },
  };
};
export default Feed;
