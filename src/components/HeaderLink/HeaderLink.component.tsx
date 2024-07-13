'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

enum Colors {
  black = 'black',
  white = 'white',
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
    <li className="relative rounded-full px-1 text-center focus:p-1 hover:bg-slate-100 focus:bg-slate-100 transition duration-300">
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
