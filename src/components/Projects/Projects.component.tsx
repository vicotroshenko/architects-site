import clsx from 'clsx';
import { nanoid } from 'nanoid';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import CONTENT from '../../../public/data/projects.json';
import ArrowIcon from '../ArrowIcon/ArrowIcon.component';
import Container from '../Container/Container.component';
import Title from '../Title/Title.component';
import ProjectsCard from './ProjectsCard.component';

const Projects = () => {
  const { text, projects } = CONTENT;
  const projectsForView = projects.slice(0, 5);
  return (
    <Container sx="container">
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
    </Container>
  );
};

export default Projects;
