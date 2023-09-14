"use client";

import { Loading } from "@/components/Loading";
import dynamic from "next/dynamic";

const Cntp = dynamic(
  () => import("@/features/nganh-cntp").then((mod) => mod.Cntp),
  {
    loading: () => <Loading />,
  }
);

const Page = () => {
  return <Cntp />;
};

export default Page;
