import { Direction } from '@/constants/swiperButton.constant';
import clsx from 'clsx';
import React from 'react';

import ArrowIcon from '../ArrowIcon/ArrowIcon.component';

interface SwiperButtonProps {
  onClick: (e: React.MouseEvent) => void;
  direction: keyof typeof Direction;
  label?: string;
}

const SwiperButton: React.FC<SwiperButtonProps> = ({
  onClick,
  direction,
  label = 'arrow button',
}) => {
  const arrowDirection = direction === Direction.LEFT ? 'rotate-180' : '';
  return (
    <>
      <button
        type="button"
        onClick={onClick}
        name={direction}
        className="flex items-center justify-center border border-gray-f2 min-h-[53px] backdrop-blur w-[53px]"
        aria-label={label}
      >
        <ArrowIcon
          width={24}
          height={24}
          wrapperClassName={clsx('w-6 h-6', arrowDirection)}
        />
      </button>
    </>
  );
};

export default SwiperButton;
