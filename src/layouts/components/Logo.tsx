import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <Image
        priority
        width={70}
        height={70}
        style={{ borderRadius: "50%" }}
        src={`/logo-dhthainguyen.png`}
        alt="logo đại học Thái nguyên"
      />
    </Link>
  );
};
