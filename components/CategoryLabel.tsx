import Link from "next/link";

/* interface ColorKey {
  JavaScript?: any;
  PHP?: any;
  CSS?: any;
  Ruby?: any;
  Python?: any;
} */

const CategoryLabel = ({ children }) => {
  const colorKey = {
    JavaScript: "yellow",
    PHP: "purple",
    CSS: "blue",
    Ruby: "red",
    Python: "green",
  };
  return (
    <div
      className={`px-2 py-1 bg-${colorKey[children]}-600 text-gray-100 font-bold rounded`}
    >
      <Link href={`/blog/category/${children.toLowerCase()}`}>{children}</Link>
    </div>
  );
};

export default CategoryLabel;
