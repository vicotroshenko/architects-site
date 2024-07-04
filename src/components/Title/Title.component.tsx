import React from 'react';

interface TitleProps {
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return <h2 className="mb-5 capitalize">{children}</h2>;
};

export default Title;
