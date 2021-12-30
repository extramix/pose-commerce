import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Modal from "./Modal";

export default function Layout({ children }) {
  return (
    <div>
      <Nav />
      <Modal />
      {children}
      <Footer />
    </div>
  );
}
