import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex gap-2">
      <Sidebar />
      <div className="w-3/4  absolute right-0 top-0 overflow-auto -z-10">{children}</div>

    </div>
  );
};

export default Layout;
