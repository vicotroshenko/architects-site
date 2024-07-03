import clsx from 'clsx';
import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";

enum ButtonStyle {
  LIGHT = 'bg-white text-black-33',
  DARK = 'bg-black-2c text-white',
}

interface ButtonWrapper {
  children: React.ReactNode;
  arrow?: boolean;
  style?: keyof typeof ButtonStyle;
}

const ButtonWrapper: React.FC<ButtonWrapper> = ({
  children,
  arrow = true,
  style = 'DARK',
}) => {
  const arrowStyle =
    style === Object.keys(ButtonStyle)[0] ? 'fill-black' : 'fill-white';
  return (
    <div
      className={clsx(
        'min-h-[71px] max-w-[222px] p-1 flex items-center justify-center gap-1 text-xs cursor-pointer',
				'focus-within:shadow-3xl hover:shadow-3xl transition-all',
        ButtonStyle[style]
      )}
    >
      {children}
      {arrow && <IoIosArrowRoundForward className={arrowStyle} width={14}/>}
    </div>
  );
};

export default ButtonWrapper;