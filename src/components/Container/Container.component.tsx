import clsx from 'clsx';

interface ContainerProps {
  children: React.ReactNode;
  sx?: string;
}

const Container: React.FC<ContainerProps> = ({ children, sx }) => {
  return (
    <section className={clsx(['mx-auto w-full h-full max-md:px-2', sx])}>
      {children}
    </section>
  );
};

export default Container;
