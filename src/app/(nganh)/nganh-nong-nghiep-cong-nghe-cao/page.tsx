"use client";

import { Loading } from "@/components/Loading";
import dynamic from "next/dynamic";

const NnCnc = dynamic(
  () => import("@/features/nganh-nn-cnc").then((mod) => mod.NnCnc),
  {
    loading: () => <Loading />,
  }
);

const Page = () => {
  return <NnCnc />;
};

export default Page;
