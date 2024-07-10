import Project from '@/components/Project/Project.component';
import React from 'react';

interface ProjectByIdProps {
  params: { id: string };
}

const ProjectById: React.FC<ProjectByIdProps> = ({ params }) => {
  return (
    <>
      <Project id={params.id} />
    </>
  );
};

export default ProjectById;
