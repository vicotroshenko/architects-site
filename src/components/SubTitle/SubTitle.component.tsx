import React from 'react';

interface SubTitleProps {
  children: React.ReactNode;
}

const SubTitle: React.FC<SubTitleProps> = ({ children }) => {
  return <p className='text-5xl font-bold'>{children}</p>;
};

export default SubTitle;
