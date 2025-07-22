import ArticleList from "@/components/ArticleList";
import Head from "next/head";

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>WebDev Newz</title>
        <meta name="description" content="A simple blog built with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ArticleList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=13`
  );

  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
