import clsx from 'clsx';
import React from 'react';


enum ButtonStyle {
  LIGHT = 'bg-white text-black-33 focus-within:shadow-3xl-dark hover:shadow-3xl-dark',
  DARK = 'bg-black-2c text-white focus-within:shadow-3xl hover:shadow-3xl',
}

interface ButtonWrapper {
  children: React.ReactNode;
  arrow?: boolean;
  style?: keyof typeof ButtonStyle;
  wrapperClassName?: string;
}

const ButtonWrapper: React.FC<ButtonWrapper> = ({
  children,
  style = 'DARK',
  wrapperClassName = '',
}) => {
  return (
    <div
      className={clsx(
        'min-h-[71px] max-w-[222px] flex items-center justify-center gap-1 text-xs cursor-pointer',
        ButtonStyle[style],
        wrapperClassName,
        'transition-all duration-300 uppercase',
      )}
    >
      {children}
    </div>
  );
};

export default ButtonWrapper;