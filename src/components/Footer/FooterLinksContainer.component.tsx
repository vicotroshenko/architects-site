interface FooterLinksContainerProps {
  title: string;
  children: React.ReactNode;
}

const FooterLinksContainer: React.FC<FooterLinksContainerProps> = ({
  title,
  children,
}) => {
  return (
    <div>
      <h2 className="mb-[25px] text-base text-inherit font-bold leading-snug capitalize">
        {title}
      </h2>
      {children}
    </div>
  );
};

export default FooterLinksContainer;
