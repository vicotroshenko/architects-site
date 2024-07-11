'use client'
import { getProjects } from '@/service/projects';
import { ProjectsType } from '@/types/projects.type';
import { nanoid } from 'nanoid';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import CONTENT from '../../../public/data/projects.json';
import ArrowIcon from '../ArrowIcon/ArrowIcon.component';
import ButtonWrapper from '../ButtonWrapper/ButtonWrapper.component';
import Container from '../Container/Container.component';
import PageWrapper from '../PageWrapper/PageWrapper.component';

const ProjectsList = () => {
  const [projects, setProjects] = useState<ProjectsType[] | null>(null);
  useEffect(() => {
    (async () => {
      const data = await getProjects();
      setProjects(data);
    })();
  }, []);
  const { text } = CONTENT;
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
              <div className="relative w-full lg:w-[57%] min-h-[435px]">
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
                    href={`projects/` + project.id}
                    className="h-[71px] flex items-center justify-center gap-2"
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
