import { useRouter } from "next/router";
import Head from "next/head";
import {Toolbar} from "../../components/toolbar";

export const Feed = ({ pageNumber, articles }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>News App</title>
      </Head>
      <div className="bg-white">
        <Toolbar />
        <div className="flex flex-col mt-[10px] items-center">
          {articles.map((article, index) => (
            <div
              className="p-10 mt-[5rem] max-w-xl  dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 hover:scale-105"
              key={index}
            >
              <h1
                onClick={() => (window.location.href = article.url)}
                className="bold text-2xl text-center cursor-pointer"
              >
                {article.title}
              </h1>
              <p className="my-5">{article.description}</p>
              {!!article.urlToImage && (
                <img classNane="w-[100%] " src={article.urlToImage} />
              )}
            </div>
          ))}
        </div>
        
        <div className="flex justify-center text-black mt-5 text-xl">
          <div
            className={
              pageNumber === 1 ? "cursor-not-allowed" : "cursor-pointer"
            }
            onClick={() => {
              if (pageNumber > 1) {
                router
                  .push(`/feed/${pageNumber - 1}`)
                  .then(() => window.scrollTo(0, 0));
              }
            }}
          >
            Previous Page
          </div>
          <div className="ml-[10px]">#{pageNumber}</div>
          <div
            className={
              pageNumber === 5
                ? "cursor-not-allowed ml-[10px] text-gray-400"
                : "cursor-pointer ml-[10px]"
            }
            onClick={() => {
              if (pageNumber < 5) {
                router
                  .push(`/feed/${pageNumber + 1}`)
                  .then(() => window.scrollTo(0, 0));
              }
            }}
          >
            Next Page
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async (pageContext) => {
  const pageNumber = pageContext.query.id;
  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    return {
      props: {
        articles: [],
        pageNumber: 1,
      },
    };
  }
  const apiResponse = await fetch(
    `https://newsapi.org/v2/top-headlines?country=in&pageSize=5&page=${pageNumber}`,
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
      pageNumber: Number.parseInt(pageNumber),
    },
  };
};
export default Feed;
