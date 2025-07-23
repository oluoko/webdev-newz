import ArticleList from "@/components/ArticleList";

export default function Home({ articles }) {
  return (
    <div>
      <ArticleList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/articles`);

  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};

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
