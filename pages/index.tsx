import type { NextPage } from "next";
import matter from "gray-matter";
import Layout from "../components/Layout";
import Link from "next/link";
import Post from "../components/Post";
import { Key } from "react";
import { getPosts } from "../lib/posts";

const Home: NextPage = ({ posts }: any) => {
  return (
    <Layout>
      <h1 className="text-5xl border-b4 p-5 font-bold">Latest Posts</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((post: any, index: Key | null | undefined) => (
          <Post key={index} post={post} />
        ))}
      </div>
      <Link href="/blog">
        <a className="block text-center border border-gray-500 text-gray-800 rounded-md py-4 my-5 transition duration-500 ease select-none hover:text-white hover:bg-gray-900 focus:online-none focus:shadow-outline w-full">
          All Post
        </a>
      </Link>
    </Layout>
  );
};

export async function getStaticProps() {
  return {
    props: {
      posts: getPosts().slice(0, 6),
    },
  };
}

export default Home;
