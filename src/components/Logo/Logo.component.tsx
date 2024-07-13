import clsx from 'clsx';
import Image from 'next/image';

import LogoImage from '../../../public/images/svg/Group 8.svg';

interface LogoProps {
  sx?: string;
}

const Logo: React.FC<LogoProps> = ({ sx }) => {
  return (
    <div className="max-w-[70px]">
      <LogoImage
        className={clsx(sx)}
        aria-label="site's logo"
      />
      <div className="relative h-[13px] mt-[-7px]">
        <Image
          src={
            'https://github.com/vicotroshenko/architects-site/blob/main/public/images/png/company-name.png?raw=true'
          }
          fill
          alt="digital project"
        />
      </div>
    </div>
  );
};

export default Logo;
