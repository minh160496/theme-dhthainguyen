import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <Image
        priority
        width={100}
        height={100}
        src={`/logo.png`}
        alt="logo đại học Thái nguyên"
      />
    </Link>
  );
};
