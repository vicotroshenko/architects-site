import clsx from 'clsx';

interface ContainerProps {
  children: React.ReactNode;
  sx?: string;
}

const Container: React.FC<ContainerProps> = ({ children, sx }) => {
  return (
    <section className={clsx(['mx-auto w-full', sx])}>{children}</section>
  );
};

export default Container;
