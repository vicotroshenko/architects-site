import Project from '@/components/Project/Project.component';
import { generateStaticParams } from '@/helpers/generateStaticParams.helper';
import React from 'react';

interface ProjectByIdProps {
  params: { id: string };
}

generateStaticParams();

const ProjectsId: React.FC<ProjectByIdProps> = ({ params }) => {
  return (
    <>
      <Project id={params.id} />
    </>
  );
};

export default ProjectsId;
