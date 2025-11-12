import Avatar from "@mui/material/Avatar";
import Image from "next/image";
import Link from "next/link";

export default function Logo({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  return (
    <Link href="/">
      <Avatar className={className}>
        <Image
          fill
          className="object-cover"
          alt="AN logo for portfolio (Sulood)"
          src={src}
        />
      </Avatar>
    </Link>
  );
}
