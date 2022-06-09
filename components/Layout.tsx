import Head from "next/head";
import { useRouter } from "next/router";
import Header from "./Header";

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  keywords: string;
  description: string;
  type: string;
  image?: any;
}
const Layout = ({
  children,
  title,
  keywords,
  description,
  type,
}: LayoutProps) => {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <meta
          property="og:url"
          content={`https://rowland.vercel.app${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://rowland.vercel.app${router.asPath}`}
        />
        <meta property="og:title" content="Rowland Adimoha Website" />
        <meta property="og:description" content="Latest Tech News and Events" />
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@rowlive" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta property="og:image" content="" />
        <meta name="twitter:image" content="" />
        <meta charSet="utf-8"></meta>

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className="container mx-auto my-7">{children}</main>
    </div>
  );
};

export default Layout;

Layout.defaultProps = {
  title: "Rowland Adimoha Website | Blog",
  description: "A developer evangelist building for Africa",
  keywords: "Tech, Frontend, Developer, React, JavaScript, Programming, News",
  type: "website",
  image: "/mega.png",
};
