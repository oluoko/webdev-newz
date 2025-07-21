import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>WebDev Newz</title>
        <meta name="description" content="A simple blog built with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-4xl font-bold text-center">Welcome to WebDev Newz</h1>

      <p className="text-lg text-center">
        This is a simple blog built with Next.js. Explore the latest articles
        and news in web development.
      </p>
    </div>
  );
}
