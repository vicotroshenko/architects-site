import clsx from 'clsx';
import React from 'react';

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
  style = 'DARK',
}) => {
  return (
    <div
      className={clsx(
        'min-h-[71px] max-w-[222px] p-1 flex items-center justify-center gap-1 text-xs cursor-pointer',
				'focus-within:shadow-3xl hover:shadow-3xl transition-all',
        ButtonStyle[style]
      )}
    >
      {children}
    </div>
  );
};

export default ButtonWrapper;