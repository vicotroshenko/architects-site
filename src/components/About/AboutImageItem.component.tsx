import clsx from 'clsx';
import Image from 'next/image';

interface AboutImageItemProps {
  [x: string]: string;
}
const AboutImageItem: React.FC<AboutImageItemProps> = ({ image, alt }) => {
  return (
    <li
      className={clsx(
        'relative lg:top-[30px] w-full max-w-[270px] first:h-[265px]',
        '[&:nth-child(2)]:h-[345px] lg:[&:nth-child(2)]:mt-[30px]',
        'last:h-[140px] lg:last:mt-[-110px]'
      )}
    >
      <Image
        src={image}
        fill
        alt={alt}
        className="aspect-auto"
        sizes="(max-width: 767px) 0w, (min-width: 768px) 100w"
      />
    </li>
  );
};

export default AboutImageItem;
