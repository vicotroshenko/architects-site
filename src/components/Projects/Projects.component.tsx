import clsx from 'clsx';
import { nanoid } from 'nanoid';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import CONTENT from '../../../public/data/projects.json';
import ArrowIcon from '../ArrowIcon/ArrowIcon.component';
import ButtonWrapper from '../ButtonWrapper/ButtonWrapper.component';
import Container from '../Container/Container.component';
import Title from '../Title/Title.component';
import ProjectsCard from './ProjectsCard.component';

const Projects = () => {
  const { text, projects } = CONTENT;
  const projectsForView = projects.slice(0, 5);
  return (
    <Container sx="container w-full mb-[120px]">
      <Title wrapperClassName="mb-[60px]">{text.title}</Title>
      <div className="flex flex-wrap justify-center gap-[30px] mb-[30px]">
        {projectsForView.map((project, index) => (
          <ProjectsCard
            index={index}
            image={project.images.desktop[0]}
            alt={project.title}
            key={nanoid()}
          />
        ))}
      </div>
      <ButtonWrapper wrapperClassName='max-lg:m-auto lg:ml-auto'>
        <Link
          href={'projects'}
          className="w-full h-[71px] flex items-center justify-center gap-1 tracking-widest uppercase"
        >
          All Projects
          <ArrowIcon />
        </Link>
      </ButtonWrapper>
    </Container>
  );
};

export default Projects;
