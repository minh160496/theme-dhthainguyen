import { LayoutPost } from "@/layouts/layoutPost";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tin tức",
  description: "Tin tức và thông báo tuyển sinh về Đại học Thái Nguyên",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <LayoutPost>{children}</LayoutPost>
    </div>
  );
};

export default Layout;
