"use client";

import { Loading } from "@/components/Loading";
import dynamic from "next/dynamic";

const LichKg = dynamic(
  () => import("@/features/lich-khai-giang").then((mod) => mod.LichKg),
  {
    loading: () => <Loading />,
  }
);

const Page = () => {
  return (
    <>
      <LichKg />
    </>
  );
};

export default Page;
