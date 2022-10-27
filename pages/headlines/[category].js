import Head from "next/head";
import { Toolbar } from "../../components/toolbar";

export const Feed = ({ articles }) => {
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
              onClick={() => (window.location.href = article.url)}
              className="flex flex-col p-10 justify-around cursor-pointer hover:scale-105 shadow-2xl"
              key={index}
            >
              <h1
                className="font-bold text-2xl text-center justify-center border-b-[5px] border-red-700 p-1"
              >
                {article.title}
              </h1>
              <p className="my-5">{article.description}</p>
              {!!article.urlToImage && (
                <img className="w-[50%] h-[50%] self-center" src={article.urlToImage} />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async (pageContext) => {
  const cat=pageContext.query.category;  
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
