import { useRouter } from "next/router";
import Head from "next/head";
import { Toolbar } from "../../components/toolbar";
import {RiBookmarkFill} from "react-icons/ri";

export const ob1=[];
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
              className="my-5">{article.description}</p>
              {!!article.urlToImage && (
                <img onClick={() => (window.location.href = article.url)} className="w-[50%] h-[50%] self-center" src={article.urlToImage} />
              )}
              <RiBookmarkFill onClick={()=>{
                ob1.push({"title": article.title, "desc":article.description, "im":article.urlToImage, "url":article.url})}

                } className="hover:scale-110 w-[30px] h-[30px]"/>
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
