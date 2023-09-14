import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Giới thiệu - đại học nông lâm",
  description: "Thông tin giới thiệu vể Đại học Nông lâm",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
