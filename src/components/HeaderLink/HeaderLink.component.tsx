'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

enum Colors {
  black = 'black',
  white = 'white'
}

interface HeaderLinkProps {
  link: string;
  color: keyof typeof Colors;
}

const HeaderLink: React.FC<HeaderLinkProps> = ({ link, color }) => {
  const pathname = usePathname();

  const pathnameClear =
    pathname !== '/' ? pathname.slice(1, pathname.length) : 'main';

  const definedColor = color === Colors.black ? 'text-black-33' : 'text-white';

  return (
    <li className="relative">
      <Link
        className={`block text-xs font-normal uppercase tracking-widest py-[4px]
        ${pathnameClear.includes(link) && 'activeLink'} ${definedColor}`}
        href={`/${link === 'main' ? '/' : link}`}
      >
        {link}
      </Link>
    </li>
  );
};

export default HeaderLink;
