// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let posts;

  if (process.env.NODE_ENV === "production") {
    //
  } else {
    const files = fs.readdirSync(path.join("posts"));

    posts = files.map((filename) => {
      const markdownWithMeta = fs.readFileSync(
        path.join("posts", filename),
        "utf8"
      );
      const { data: frontmatter } = matter(markdownWithMeta);
      return {
        frontmatter,
      };
    });
  }

  //ts-ignore
  const results = posts.filter(
    ({ frontmatter: { title, excerpt, category } }) =>
      title.toLowerCase().indexOf(req.query.q) != -1 ||
      excerpt.toLowerCase().indexOf(req.query.q) != -1 ||
      category.toLowerCase().indexOf(req.query.q) != -1
  );

  console.log(results);
  console.log("post");
  res.status(200).json({ name: "John Doe" });
}
