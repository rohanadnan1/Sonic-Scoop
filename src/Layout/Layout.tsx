import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";

const Layout = ({ children }: any) => {
  return (
    <div className="flex gap-2">
      <Sidebar />
      <div className="w-3/4 border border-white absolute right-0 top-0 overflow-auto">{children}</div>
    </div>
  );
};

export default Layout;
