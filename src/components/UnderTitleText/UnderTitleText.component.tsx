import clsx from 'clsx';
import React from 'react';

interface UnderTitleTextProps {
  children: React.ReactNode;
  wrapperClassName?: string;
}
const UnderTitleText: React.FC<UnderTitleTextProps> = ({
  children,
  wrapperClassName = '',
}) => {
  return (
    <>
      <p className={clsx('font-bold text-5xl capitalize', wrapperClassName)}>
        {children}
      </p>
    </>
  );
};

export default UnderTitleText;
