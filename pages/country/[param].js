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
        <div className="flex flex-col mt-[10px] items-center">
          {articles.map((article, index) => (
            <div
              className="p-10 mt-[5rem] max-w-xl  bg-gray-800 border-gray-700 hover:bg-gray-700 hover:scale-105"
              key={index}
            >
              <h1
                onClick={() => (window.location.href = article.url)}
                className="bold text-2xl text-center text-white cursor-pointer border-[5px] p-6"
              >
                {article.title}
              </h1>
              <p className="my-5 text-white">{article.description}</p>
              {!!article.urlToImage && (
                <img className="w-[100%] " src={article.urlToImage} />
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
    `https://newsapi.org/v2/top-headlines?country=${country}`,
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
