import React from "react";
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout title="About Rowland Adimoha">
      <h1 className="text-5xl border-b-4 pb-5 font-bold">About</h1>
      <div className="bg-white shadow-md rounded-lg px-10 py-6 mt-6">
        <h3 className="text-2xl mb-5"> Rowland's Blog</h3>
        <p className="mb-3">This is a blog built with Next.js and Markdown</p>
        <p className="font-bold">Version 1.0</p>
      </div>
    </Layout>
  );
};

export default About;
