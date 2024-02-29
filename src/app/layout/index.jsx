import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";

export const MasterLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};
