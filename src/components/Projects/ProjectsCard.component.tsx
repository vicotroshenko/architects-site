import { useGlobalStore } from '@/store/global.store';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import ArrowIcon from '../ArrowIcon/ArrowIcon.component';
import Loader from '../Loader/Loader.component';

interface ProjectsCardProps {
  index: number;
  image: string;
  alt: string;
  id: string;
}

const ProjectsCard: React.FC<ProjectsCardProps> = ({
  index,
  image,
  alt,
  id,
}) => {
  const isLoading = useGlobalStore((state) => state.isLoading);
  return (
    <Link
      href={`projects/` + id}
      className={clsx('group block relative w-full h-[255px] overflow-hidden', {
        'max-w-[570px]': index === 0 || index === 1,
        'max-w-[570px] lg:max-w-[270px]': index === 2,
        'max-w-[570px] lg:max-w-[470px]': index === 3,
        'max-w-[570px] lg:max-w-[370px]': index === 4,
        'pb-[100%]': isLoading,
      })}
    >
      {isLoading && <Loader />}
      <div
        className={clsx(
          'flex flex-col justify-center pl-[84px] w-full h-full absolute inset-0 bg-t-black invisible opacity-0 z-10',
          'group-hover:visible group-hover:translate-x-0 group-hover:opacity-100',
          'group-focus:visible group-focus:translate-x-0 group-focus:opacity-100',
          'transition duration-300 translate-x-[-50%]'
        )}
      >
        <p className="w-min text-5xl text-white font-bold mb-2 max-lg:text-2xl">
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
          className="group-hover:scale-110 transition duration-300"
        />
      </div>
    </Link>
  );
};

export default ProjectsCard;
