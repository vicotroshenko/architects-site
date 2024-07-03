import { nanoid } from 'nanoid';
import Image from 'next/image';
import Link from 'next/link';

interface ContactItem {
  icon: string;
  address: string;
}

interface FooterContactsProps {
  contacts: ContactItem[];
}
const linkAddress =
  'https://www.google.com/maps/search/1234+Sample+Street+Austin+Texas+78704/@30.2415626,-97.8098698,13z/data=!3m1!4b1?entry=ttu';

const FooterContacts: React.FC<FooterContactsProps> = ({ contacts }) => {
  const getLink = (address: string, index: number): string => {
    switch (index) {
      case 0:
        return linkAddress;
      case 1:
        return `tel:${address}`;
      case 2:
        return `mailto:${address}`;
      default:
        return '';
    }
  };

  return (
    <ul className="flex flex-col justify-between h-4/5">
      {contacts.map(({ address, icon }, index) => (
        <li
          key={nanoid()}
          className="flex gap-5"
        >
          <Image
            src={icon}
            width={20}
            height={20}
            alt="contact icon"
          />
          <Link href={getLink(address, index)}>{address}</Link>
        </li>
      ))}
    </ul>
  );
};

export default FooterContacts;
