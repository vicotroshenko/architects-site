import clsx from 'clsx';
import React from 'react';

interface TitleProps {
  children: React.ReactNode;
  wrapperClassName?: string;
}

const Title: React.FC<TitleProps> = ({ children, wrapperClassName='' }) => {
  return (
    <h2 className={clsx('mb-5 capitalize max-lg:text-2xl', wrapperClassName)}>{children}</h2>
  );
};

export default Title;
