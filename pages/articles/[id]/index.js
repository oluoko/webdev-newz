import { useRouter } from "next/router";
import Head from "next/head";
import React from "react";
import articleStyles from "@/styles/Article.module.css";
import Link from "next/link";

const article = ({ article }) => {
  // const router = useRouter();
  // const { id } = router.query;

  return (
    <>
      <Head>
        <title>{article.title} | WebDev Newz</title>
      </Head>
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

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );

  const article = await res.json();

  return { props: { article } };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);

  const articles = await res.json();

  const ids = articles.map((article) => article.id);

  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return { paths, fallback: false };
};

export default article;
