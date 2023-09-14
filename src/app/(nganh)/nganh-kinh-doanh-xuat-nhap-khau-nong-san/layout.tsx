import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ngành kinh doanh xuất nhập khẩu",
  description: "Thông tin ngành kinh doanh xuất nhập khẩu Đại học nông lâm",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
