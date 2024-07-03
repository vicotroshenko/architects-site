import clsx from 'clsx';

interface ContainerProps {
  children: React.ReactNode;
  sx?: string;
}

const Container: React.FC<ContainerProps> = ({ children, sx }) => {
  return (
    <div className={clsx(['container mx-auto px-2.5', sx])}>{children}</div>
  );
};

export default Container;
