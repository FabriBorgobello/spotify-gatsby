import * as React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({ pageTitle, children }) => {
  return (
    <main>
      <title>{pageTitle}</title>
      <NavBar />
      {children}
      <Footer />
    </main>
  );
};
export default Layout;
