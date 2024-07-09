import clsx from 'clsx';
import React from 'react';

import Title from '../Title/Title.component';
import UnderTitleText from '../UnderTitleText/UnderTitleText.component';

interface PageWrapperProps {
  title: string;
  underTitle: string;
  children: React.ReactNode;
  wrapperClassName?: string;
}
const PageWrapper: React.FC<PageWrapperProps> = ({
  title,
  underTitle,
  children,
  wrapperClassName = '',
}) => {
  return (
    <>
      <div className="mb-[30px]">
        <Title>{title}</Title>
        <UnderTitleText>{underTitle}</UnderTitleText>
      </div>
      <ul className={clsx(wrapperClassName)}>{children}</ul>
    </>
  );
};

export default PageWrapper;
