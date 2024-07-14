import Project from '@/components/Project/Project.component';
import { getStaticParams } from '@/helpers/getStaticParams.helper';
import React from 'react';

interface ProjectByIdProps {
  params: { id: string };
}

export function generateStaticParams(){
  return getStaticParams()
};

const ProjectsId: React.FC<ProjectByIdProps> = ({ params }) => {
  return (
    <>
      <Project id={params.id} />
    </>
  );
};

export default ProjectsId;
