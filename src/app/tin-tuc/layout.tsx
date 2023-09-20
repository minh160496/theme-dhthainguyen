import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tin tức",
  description: "Tin tức và thông báo mới nhất về Đại học Thái Nguyên",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
