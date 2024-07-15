import Project from '@/components/Project/Project.component';
import { getParams } from '@/helpers/getParams.helper';
import React from 'react';

interface ProjectByIdProps {
  params: { id: string };
}

export async function generateStaticParams() {
  return await getParams();
}

const ProjectsId: React.FC<ProjectByIdProps> = ({ params }) => {
  return (
    <>
      <Project id={params.id} />
    </>
  );
};

export default ProjectsId;
