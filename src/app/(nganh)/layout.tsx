import { Counters } from "@/features/home/Counters";
import { Review } from "@/features/home/Review";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Đăng ký học - tuaf",
  description: "Thông tin đăng ký học tại Đại học Nông lâm",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <Counters />
      <Review />
    </>
  );
};

export default Layout;
