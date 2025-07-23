import ArticleList from "@/components/ArticleList";
<<<<<<< HEAD
import { server } from "@/config";
=======
import Head from "next/head";
>>>>>>> 194a9569932a12d45a6a461a20413a87b963a2ff

export default function Home({ articles }) {
  return (
    <div>
<<<<<<< HEAD
=======
      <Head>
        <title>WebDev Newz</title>
        <meta name="description" content="A simple blog built with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
>>>>>>> 194a9569932a12d45a6a461a20413a87b963a2ff
      <ArticleList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
<<<<<<< HEAD
  const res = await fetch(`${server}/api/articles`);
=======
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=13`
  );
>>>>>>> 194a9569932a12d45a6a461a20413a87b963a2ff

  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
<<<<<<< HEAD

// export const getStaticProps = async () => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_limit=13`
//   );

//   const articles = await res.json();

//   return {
//     props: {
//       articles,
//     },
//   };
// };
=======
>>>>>>> 194a9569932a12d45a6a461a20413a87b963a2ff
