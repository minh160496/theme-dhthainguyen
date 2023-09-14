import { LayoutPost } from "@/layouts/layoutPost";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tin tức",
  description: "Tin tức về Evstep",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <LayoutPost>{children}</LayoutPost>
    </div>
  );
};

export default Layout;
