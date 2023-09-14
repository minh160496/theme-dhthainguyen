import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lịch khai giảng tuaf",
  description: "Thông tin chi tiết lịch khai giảng hệ từ xa đại học nôn lâm",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
