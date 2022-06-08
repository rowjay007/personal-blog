import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <Head>
          <title>rowland adimoha</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div>
          <h2>Hello, World</h2>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
