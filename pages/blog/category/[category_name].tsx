import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Layout from "../../../components/Layout";
import Post from "../../../components/Post";
import { Key } from "react";
import { getPosts } from "../../../lib/posts";

const CategoryBlogPage = ({ posts, categoryName }) => {
  return (
    <Layout>
      <h1 className="text-5xl border-b4 p-5 font-bold">
        Posts in {categoryName}
      </h1>
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

  const categories = files.map((filename) => {
    const markdownWithmeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithmeta);
    return frontmatter.category.toLowerCase();
  });
  const paths = categories.map((category) => ({
    params: { category_name: category },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { category_name } }) {
  const files = fs.readdirSync(path.join("posts"));
  const posts = getPosts();

  const categoryPosts = posts.filter(
    (post) => post.frontmatter.category.toLowerCase() === category_name
  );
  return {
    props: {
      posts: categoryPosts,
      categoryName: category_name,
    },
  };
}

export default CategoryBlogPage;
