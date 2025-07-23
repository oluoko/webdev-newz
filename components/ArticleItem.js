import Link from "next/link";
import React from "react";
import articleStyle from "@/styles/Article.module.css";

const ArticleItem = ({ article }) => {
  return (
    <Link href={`/articles/${article.id}`}>
      <div className={articleStyle.card}>
        <h3 className={articleStyle.title}>{article.title}</h3>
        <p>{article.body}</p>
      </div>
    </Link>
  );
};

export default ArticleItem;
