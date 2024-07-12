'use client';

import { getProjectById } from '@/service/projects';
import { ProjectsType } from '@/types/projects.type';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

import Container from '../Container/Container.component';
import Title from '../Title/Title.component';
import ProjectsSwiper from './ProjectsSwiper.component';

interface ProjectProps {
  id: string;
}

const Project: React.FC<ProjectProps> = ({ id }) => {
  const [project, setProject] = useState<ProjectsType | null>(null);
  useEffect(() => {
    if (project) return;

    (async () => {
      const data = await getProjectById(id);
      setProject(data);
    })();
  }, [id, project]);
  console.log(project);
  return (
    <Container>
      {project && (
        <div className="container m-auto h-full pt-[63px] pb-[120px]">
          <Title wrapperClassName="mb-[74px]">{project?.title}</Title>
          <div className="relative w-full max-h-[435px] overflow-hidden before:content-[''] before:block before:pb-[100%] before:h-full mb-[30px]">
            <Image
              src={project?.images.desktop[0]}
              fill
              alt={project?.title}
              style={{
                objectFit: 'contain',
              }}
              sizes="100vw"
            />
          </div>
          <div className="mb-[30px]">
            <p className="text-base leading-snug">{project?.description}</p>
          </div>
          <ProjectsSwiper
            images={project.images.desktop}
          />
        </div>
      )}
    </Container>
  );
};

export default Project;
