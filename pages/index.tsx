import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../components/Layout";
import Link from "next/link";
import Post from "../components/Post";
import { Key } from "react";
import { sortByDate } from "../utils";

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
  const files = fs.readdirSync(path.join("posts"));
  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate).slice(0, 6),
    },
  };
}

export default Home;
