"use client";

import { Loading } from "@/components/Loading";
import dynamic from "next/dynamic";

const CntpTa = dynamic(
  () => import("@/features/nganh-cntp-ta").then((mod) => mod.CntpTa),
  {
    loading: () => <Loading />,
  }
);

const Page = () => {
  return <CntpTa />;
};

export default Page;
