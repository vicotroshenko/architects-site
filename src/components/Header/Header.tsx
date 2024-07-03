import React from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import CONTENT from "../../data/header.json";
import HeaderLink from "../HeaderLink/HeaderLink";
import Container from "../Container/Container";
import Logo from "../Logo/Logo";


const Header = () => {
  return (
    <header className="w-full">
      <Container>
        <div className="min-h-[102px] flex items-center justify-between lg:pr-[134px]">
          <Link href="/" aria-label="link to main page">
            <Logo sx="w-[70px] h-[40px] fill-black-2c" />
          </Link>
          <nav className="hidden w-[55.5%] lg:block">
            <ul className="flex justify-between w-full">
              {CONTENT.text.map((item, index) => (
                <HeaderLink link={item} color="black" key={index} />
              ))}
            </ul>
          </nav>
          <button type="button" className="w-[40px] h-[40px] lg:hidden">
            <RxHamburgerMenu className="w-full h-full"/>
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
