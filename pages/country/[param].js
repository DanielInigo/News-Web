import { useRouter } from "next/router";
import Head from "next/head";
import { Toolbar } from "../../components/toolbar";

export const Feed = ({ articles }) => {
  const router = useRouter();
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

        {/* <div className="flex justify-around text-black mt-5 text-xl">
          <div
            className={
              pageNumber === 1 ? "cursor-not-allowed text-gray-400 bg-red-700 rounded-full p-3" : "cursor-pointer  bg-red-700 rounded-full p-3"
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
          <div className="ml-[10px]">Page {pageNumber}</div>
          <div
            className={
              pageNumber === 5
                ? "cursor-not-allowed ml-[10px] text-gray-400  bg-red-700 rounded-full p-3"
                : "cursor-pointer ml-[10px] bg-red-700 rounded-full p-3"
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
        </div> */}
      </div>
    </>
  );
};

export const getServerSideProps = async (pageContext) => {
  const country = pageContext.query.param;
  const apiResponse = await fetch(
    `https://newsapi.org/v2/top-headlines?country=${country}&pageSize=40`,
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
