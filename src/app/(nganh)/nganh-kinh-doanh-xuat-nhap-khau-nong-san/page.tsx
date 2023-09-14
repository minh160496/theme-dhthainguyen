"use client";

import { Loading } from "@/components/Loading";
import dynamic from "next/dynamic";

const Kdxnk = dynamic(
  () => import("@/features/nganh-kdxnk").then((mod) => mod.Kdxnk),
  {
    loading: () => <Loading />,
  }
);

const Page = () => {
  return <Kdxnk />;
};

export default Page;
