import React from 'react';

import CONTENT from '../../../public/data/projects.json';
import Container from '../Container/Container.component';

interface ProjectProps {
  id: string;
}

const Project: React.FC<ProjectProps> = ({ id }) => {
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
