import React from "react";
import { MasterLayout } from "app/layout";

export const PrivateRoute = ({ children }) => {
  const auth = true;
  return <>{auth ? <MasterLayout>{children}</MasterLayout> : "false"}</>;
};
