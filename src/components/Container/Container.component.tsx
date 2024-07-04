import clsx from 'clsx';

interface ContainerProps {
  children: React.ReactNode;
  sx?: string;
}

const Container: React.FC<ContainerProps> = ({ children, sx }) => {
  return (
    <div className={clsx(['container mx-auto', sx])}>{children}</div>
  );
};

export default Container;
