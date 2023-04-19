import React from "react";
import Header from "./commons/Header";
import Footer from "./commons/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="container">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
