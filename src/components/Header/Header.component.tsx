'use client';

import useClickOutside from '@/hooks/useClickOutside.hook';
import { useGlobalStore } from '@/store/global.store';
import clsx from 'clsx';
import Link from 'next/link';
import React, { useRef } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { RxCross1 } from 'react-icons/rx';

import CONTENT from '../../../public/data/header.json';
import Logo from '../Logo/Logo.component';
import HeaderNav from './HeaderNav.component';

const Header = () => {
  const setOpen = useGlobalStore((state) => state.setModal);
  const closeModal = useGlobalStore((state) => state.closeModal);
  const isOpen = useGlobalStore((state) => state.isOpen);

  const openDropdown = (e: React.MouseEvent<HTMLButtonElement>): void =>
    setOpen();

  const wrapperRef = useRef<HTMLDivElement>(null);
  useClickOutside(wrapperRef, () => closeModal());

  return (
    <>
      <header className="relative w-full z-20 bg-white max-md:px-2">
        <div className="container min-h-[102px] flex items-center justify-between lg:pr-[134px] m-auto">
          <Link
            href="/"
            aria-label="link to main page"
          >
            <Logo sx="w-[70px] h-[40px] fill-black-2c" />
          </Link>
          <HeaderNav
            links={CONTENT.text}
            navClassName="max-lg:hidden"
          />
          <button
            type="button"
            className="w-[40px] h-[40px] lg:hidden"
            onClick={openDropdown}
          >
            <RxHamburgerMenu
              className={clsx('w-full h-full', {
                ['hidden']: isOpen,
                ['block']: !isOpen,
              })}
            />
            <RxCross1
              className={clsx('w-full h-full', {
                ['hidden']: !isOpen,
                ['block']: isOpen,
              })}
            />
          </button>
        </div>
      </header>
      <div
        ref={wrapperRef}
        className={clsx(
          'absolute top-[102px] right-0 w-full bg-t-white shadow p-2 z-10',
          'md:max-w-[300px] max-md:h-[200px] md:min-h-[300px]',
          {
            ['block']: isOpen,
            ['hidden']: !isOpen,
          },
          'animate-show-up'
        )}
      >
        <HeaderNav links={CONTENT.text} />
      </div>
    </>
  );
};

export default Header;
