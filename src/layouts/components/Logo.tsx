import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <Image
        priority
        width={80}
        height={80}
        style={{ borderRadius: "50%" }}
        src={`/logo-dhthainguyen.png`}
        alt="logo Đại học Thái nguyên"
      />
    </Link>
  );
};
