/* eslint-disable @next/next/no-css-tags */
import Head from "next/head";

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>Diva Hester</title>
        <style>
          {`@import
          url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400;1,500;1,600;1,700;1,900&display=swap");`}
        </style>
      </Head>
    </>
  );
}
