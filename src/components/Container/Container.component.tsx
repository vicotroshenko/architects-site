import clsx from 'clsx';

interface ContainerProps {
  children: React.ReactNode;
  sx?: string;
}

const Container: React.FC<ContainerProps> = ({ children, sx }) => {
  return (
    <section className={clsx(['container mx-auto', sx])}>{children}</section>
  );
};

export default Container;
