import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Helmet } from "react-helmet";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <div>
          <meta charSet="utf-8" />
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords} />
          <meta name="author" content={author} />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
        </div>

        <title>{title}</title>
      </Helmet>
      <Header />
      <main style={{ minHeight: "80vh" }}>{children}</main>
      <Footer />
    </div>
  );
};

Layout.defaulProps = {
  title: "Ecommerce",
  description: "mern stack final project",
  keywords: "mongodb,reactjs,expressjs,nodejs",
  author: "Ivan Muhammad Mufid",
};

export default Layout;
