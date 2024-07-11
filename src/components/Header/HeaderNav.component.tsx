'use client';

import clsx from 'clsx';
import React from 'react';

import HeaderLink from '../HeaderLink/HeaderLink.component';

interface HeaderNavProps {
  links: string[];
  navClassName?: string;
}
const HeaderNav: React.FC<HeaderNavProps> = ({ links, navClassName }) => {
  return (
    <nav
      className={clsx(
        'flex justify-center items-center h-full lg:w-[55.5%] lg:block max-lg:p-4',
        navClassName
      )}
    >
      <ul className="flex justify-between max-lg:flex-col max-lg:max-w-[200px] flex-wrap max-lg:gap-2 h-full w-full">
        {links.map((item, index) => (
          <HeaderLink
            link={item}
            color="black"
            key={index}
          />
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNav;
