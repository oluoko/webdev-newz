<<<<<<< HEAD
import React from "react";
import articleStyles from "@/styles/Article.module.css";
import Link from "next/link";
import { server } from "@/config";
import Meta from "@/components/Meta";
=======
import { useRouter } from "next/router";
import Head from "next/head";
import React from "react";
import articleStyles from "@/styles/Article.module.css";
import Link from "next/link";
>>>>>>> 194a9569932a12d45a6a461a20413a87b963a2ff

const article = ({ article }) => {
  // const router = useRouter();
  // const { id } = router.query;

  return (
    <>
<<<<<<< HEAD
      <Meta
        title={article.title}
        description={article.body.substring(0, 150)}
      />
=======
      <Head>
        <title>{article.title} | WebDev Newz</title>
      </Head>
>>>>>>> 194a9569932a12d45a6a461a20413a87b963a2ff
      <div className="w-[90vw] md:w-[65vw] my-8 md:my-20">
        <h1 className={articleStyles.title}>{article.title}</h1>
        <p className={articleStyles.body}>{article.body}</p>
      </div>
      <div className="flex gap-6">
        <Link href="/" className="text-blue-500 hover:underline">
          Back to Articles
        </Link>
        <Link href="/" className="text-blue-500 hover:underline">
          Go Back
        </Link>
      </div>
    </>
  );
};
<<<<<<< HEAD
export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`);
=======

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );
>>>>>>> 194a9569932a12d45a6a461a20413a87b963a2ff

  const article = await res.json();

  return { props: { article } };
};

export const getStaticPaths = async () => {
<<<<<<< HEAD
  const res = await fetch(`${server}/api/articles`);
=======
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
>>>>>>> 194a9569932a12d45a6a461a20413a87b963a2ff

  const articles = await res.json();

  const ids = articles.map((article) => article.id);

  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return { paths, fallback: false };
};

<<<<<<< HEAD
// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );

//   const article = await res.json();

//   return { props: { article } };
// };

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

//   const articles = await res.json();

//   const ids = articles.map((article) => article.id);

//   const paths = ids.map((id) => ({ params: { id: id.toString() } }));

//   return { paths, fallback: false };
// };

=======
>>>>>>> 194a9569932a12d45a6a461a20413a87b963a2ff
export default article;
