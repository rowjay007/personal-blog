import type { NextPage } from "next";
import Image from "next/image";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../../../components/Layout";
import Link from "next/link";
import Post from "../../../components/Post";
import { Key } from "react";
import { sortByDate } from "../../../utils";
import { POSTS_PER_PAGE } from "../../../config";

const BlogPage: NextPage = ({ posts }: any) => {
  return (
    <Layout>
      <h1 className="text-5xl border-b4 p-5 font-bold">Blog</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((post: any, index: Key | null | undefined) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const numPages = Math.ceil(files.length / POSTS_PER_PAGE);

  let paths = [];

  for (let i = 1; i <= numPages; i++) {
    paths.push({
      params: {
        page: { page_index: i.toString() },
      },
    });
    }
    console.log(paths);
    return {
        paths,
        fallback: false
    };
}

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
      posts: posts.sort(sortByDate),
    },
  };
}

export default BlogPage;
