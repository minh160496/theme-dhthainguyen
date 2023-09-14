import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <Image
        priority
        width={80}
        height={80}
        src={`/logo-tuaf.png`}
        alt="logo evstep"
      />
    </Link>
  );
};
