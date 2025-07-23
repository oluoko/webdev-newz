import React from "react";
import Head from "next/head";

const Meta = ({ title, keywords, description }) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="description" content={description} />
      <title>{title ? `${title} | WebDev Newz` : "WebDev Newz"}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "WebDev Newz",
  keywords: "web development, programming, coding",
  description: "Get the latest web development news",
};

export default Meta;
