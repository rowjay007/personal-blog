import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../components/Layout";

const Home: NextPage = ({posts}) => {
  console.log(posts)
  return (
    <Layout>
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <div>
          <h2>Hello, World</h2>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps(props: any) {
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

  console.log(posts);

  return {
    props: {
      posts
    },
  };
}

export default Home;
