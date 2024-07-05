import clsx from 'clsx';
import React from 'react';
import { MdArrowRightAlt } from 'react-icons/md';

interface ArrowIconProps {
  width?: number;
  height?: number;
  wrapperClassName?: string;
}

const ArrowIcon: React.FC<ArrowIconProps> = ({
  width = 24,
  height = 24,
  wrapperClassName,
}) => {
  return (
    <>
      <MdArrowRightAlt
        width={width}
        height={height}
        className={clsx(wrapperClassName)}
      />
    </>
  );
};

export default ArrowIcon;