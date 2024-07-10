'use client';

import { useParams } from 'next/navigation';
import React from 'react';

import CONTENT from '../../../public/data/projects.json';
import Container from '../Container/Container.component';

const Project = () => {
  const { id } = useParams();
  const project = CONTENT.projects.find((item) => item.id === id);
  console.log('project: ', project);

  return (
    <Container>
      <div className="container">
				
			</div>
    </Container>
  );
};

export default Project;
