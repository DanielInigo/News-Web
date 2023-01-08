import Head from "next/head";
import { Toolbar } from "../../components/toolbar";
import { RiBookmarkFill } from "react-icons/ri";
import { useSession } from "next-auth/react";

export const Feed = ({ articles }) => {
  const { data: session } = useSession();
  const handleClick = async (news) => {
    await fetch("http://localhost:3000/api/book", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: news.title,
        description: news.description,
        image: news.urlToImage,
        url: news.url,
        email: session.user.email,
      }),
    });
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
                onClick={() => (window.location.href = article.url)}
                className="font-bold text-2xl text-center justify-center border-b-[5px] border-red-700 p-1"
              >
                {article.title}
              </h1>
              <p
                onClick={() => (window.location.href = article.url)}
                className="my-5"
              >
                {article.description}
              </p>
              {!!article.urlToImage && (
                <img
                  onClick={() => (window.location.href = article.url)}
                  className="w-[50%] h-[50%] self-center"
                  src={article.urlToImage}
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
  const cat = pageContext.query.category;
  const apiResponse = await fetch(
    `https://newsapi.org/v2/top-headlines?category=${cat}&pageSize=40`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_NEWS_KEY}`,
      },
    }
  );
  const apiJson = await apiResponse.json();
  const { articles } = apiJson;
  return {
    props: {
      articles,
    },
  };
};
export default Feed;
