import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ngành công nghệ thực phẩm tiếng Anh",
  description: "Thông tin ngành công nghệ thực Tiếng Anh phẩm Đại học nông lâm",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
