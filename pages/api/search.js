import fs from "fs";
import path from "path";
import matter from "gray-matter";

//ts-ignore

// @ts-nocheck

export default (req, res) => {
  let posts;
  if (process.env.NODE_ENV === "production") {
    //
  } else {
    const files = fs.readdirSync(path.join("post"));
    posts = files.map((filename) => {
      const markdownWithMeta = fs.readFileSync(
        path.join("post", filename),
        "utf8"
      );
      const { data: frontmatter } = matter(markdownWithMeta);

      return {
        frontmatter,
      };
    });
  }

  const results = posts.filter(
    ({ frontmatter: { title, excerpt, category } }) => {
      title.toLowerCase().indexOf(req.query.q) != -1 ||
      excerpt.toLowerCase().indexOf(req.query.q) != -1 ||
      category.toLowerCase().indexOf(req.query.q) != -1 
    }
  );

  console.log(results);
  res.status(200).json({ name: "Rowjay" });
};
