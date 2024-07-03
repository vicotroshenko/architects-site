import Link from "next/link";

interface FooterLinksProps {
  links: string[];
}

const FooterLinks: React.FC<FooterLinksProps> = ({ links }) => {
  return (
    <ul className="flex flex-col gap-y-4">
      {links.map((link: string, index) => (
        <li key={index}>
          <Link
            href={`/${link === "main" ? "" : link}`}
            className="text-sm leading-loose tracking-wide capitalize"
          >
            {link}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default FooterLinks;
