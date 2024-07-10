import React from 'react';

interface ErrorTextProps {
  error?: string;
}

const ErrorText: React.FC<ErrorTextProps> = ({ error = '' }) => {
  return <span className="text-red-500 text-sm">{error}</span>;
};

export default ErrorText;
