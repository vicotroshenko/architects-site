import { nanoid } from 'nanoid';
import Image from 'next/image';
import Link from 'next/link';

interface FooterLinksSMProps {
  media: { [x: string]: string }[];
}

const FooterLinksSM: React.FC<FooterLinksSMProps> = ({ media }) => {
  return (
    <ul className="flex justify-between gap-10">
      {media.map(({ logo, link }) => (
        <li key={nanoid()}>
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <Image
              src={logo}
              width={20}
              height={20}
              alt={`link to ${link}`}
              className="max-h-[20px]"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default FooterLinksSM;
