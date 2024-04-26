import Link from "next/link";
import { FC, ReactNode } from "react";

interface HeaderLinkProps {
  link: string;
}

const HeaderLink: FC<HeaderLinkProps> = ({ link }) => {
  return (
    <li>
      <Link
        className="block text-xs font-normal uppercase tracking-widest"
        href={`/${link}`}
      >
        {link}
      </Link>
    </li>
  );
};

export default HeaderLink;
