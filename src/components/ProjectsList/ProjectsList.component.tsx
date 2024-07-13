'use client';

import { useGlobalStore } from '@/store/global.store';
import { nanoid } from 'nanoid';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import CONTENT from '../../../public/data/projects.json';
import ArrowIcon from '../ArrowIcon/ArrowIcon.component';
import ButtonWrapper from '../ButtonWrapper/ButtonWrapper.component';
import Container from '../Container/Container.component';
import Loader from '../Loader/Loader.component';
import PageWrapper from '../PageWrapper/PageWrapper.component';

const ProjectsList = () => {
  const projects = useGlobalStore((state) => state.projects);
  const getProjects = useGlobalStore((state) => state.getAllProjects);
  const isLoading = useGlobalStore((state) => state.isLoading);

  useEffect(() => {
    if (!projects) {
      getProjects();
    }

    window.scrollTo({
      top: 102,
      left: 0,
      behavior: 'smooth',
    });
  }, [getProjects, projects]);

  const { text } = CONTENT;

  if (isLoading) return <Loader />;
  return (
    <Container>
      <div className="container m-auto">
        <PageWrapper
          title={text.title.split(' ')[0]}
          underTitle={text.title.split(' ')[1]}
          wrapperClassName="flex flex-col gap-y-[60px] pt-[30px] pb-[60px] border-t border-gray-f2"
        >
          {projects?.map((project) => (
            <li
              key={nanoid()}
              className="flex flex-wrap bg-gray-f3"
            >
              <div className="relative w-full lg:w-[57%] max-h-[435px] before:content-[''] before:block before:pb-[100%] before:h-full">
                <Image
                  src={project.images.desktop[0]}
                  fill
                  alt={project.title}
                />
              </div>
              <div className="p-[30px]">
                <h3 className="mb-[73px] text-2xl text-gray-bd">
                  {project.title}
                </h3>
                <p className="lg:max-w-[400px] max-h-[120px] mb-[64px] leading-6 line-clamp-5">
                  {project.description}
                </p>
                <ButtonWrapper style="LIGHT">
                  <Link
                    href={`projects/` + project._id}
                    className="h-[71px] w-full flex items-center justify-center gap-2"
                  >
                    <span>{text.moreButton}</span>
                    <ArrowIcon />
                  </Link>
                </ButtonWrapper>
              </div>
            </li>
          ))}
        </PageWrapper>
      </div>
    </Container>
  );
};

export default ProjectsList;
