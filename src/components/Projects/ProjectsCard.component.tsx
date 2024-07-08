import clsx from 'clsx';
import { nanoid } from 'nanoid';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import ArrowIcon from '../ArrowIcon/ArrowIcon.component';

interface ProjectsCardProps {
  index: number;
  image: string;
  alt: string;
}

const ProjectsCard: React.FC<ProjectsCardProps> = ({ index, image, alt }) => {
  return (
    <Link
      href={`projects}`}
      className={clsx('block relative w-full h-[255px]', {
        'pointer-events-none': index !== 0,
        'max-w-[570px]': index === 0 || index === 1,
        'max-w-[570px] lg:max-w-[270px]': index === 2,
        'max-w-[570px] lg:max-w-[470px]': index === 3,
        'max-w-[570px] lg:max-w-[370px]': index === 4,
      })}
    >
      <div
        className={clsx(
          'flex flex-col justify-center pl-[84px] w-full h-full absolute inset-0 z-10',
          {
            'block bg-t-black': index === 0,
          },
          { hidden: index !== 0 }
        )}
      >
        <p className="w-min text-5xl text-white font-bold mb-2">
          Sample Project
        </p>
        <div className="flex gap-x-5 items-center">
          <span className="text-white uppercase">View more</span>
          <ArrowIcon wrapperClassName="fill-white" />
        </div>
      </div>
      <div className="relative w-full max-w-[570px] h-[255px] z-1">
        <Image
          src={image}
          fill
          alt={alt}
        />
      </div>
    </Link>
  );
};

export default ProjectsCard;
