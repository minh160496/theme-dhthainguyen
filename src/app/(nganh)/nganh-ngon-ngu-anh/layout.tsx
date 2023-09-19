import { ReactNode } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ngành ngôn ngữ Anh",
  description:
    "Tuyển sinh đại học từ xa ngành ngôn ngữ Anh - đại học Thái nguyên, nhận bằng đại học tại nhà",
};

const Layout = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
