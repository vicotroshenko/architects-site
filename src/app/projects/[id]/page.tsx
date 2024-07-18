import Project from '@/components/Project/Project.component';
import { ids } from '@/constants/ids.constant';
import React from 'react';

interface ProjectByIdProps {
  params: { id: string };
}

export function generateStaticParams() {
  return ids;
}

const ProjectsId: React.FC<ProjectByIdProps> = ({ params }) => {
  return (
    <>
      <Project id={params.id} />
    </>
  );
};

export default ProjectsId;
