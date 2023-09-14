import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ngành nông nghiệp công nghệ cao",
  description: "Thông tin ngành nông nghiệp công nghệ caoĐại học nông lâm",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
