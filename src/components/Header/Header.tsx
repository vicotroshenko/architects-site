import React from "react";
import content from "../../data/header.json";
import HeaderLink from "../HeaderLink/HeaderLink";

const Header = () => {
  return (
    <header>
      <ul className="flex justify-between">
        {content.text.map((item, index) => (
          <HeaderLink link={item} key={index} />
        ))}
      </ul>
    </header>
  );
};

export default Header;
