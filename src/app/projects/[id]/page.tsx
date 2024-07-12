import Project from '@/components/Project/Project.component';
import { HTTP } from '@/constants/service.constant';
import { ProjectsType } from '@/types/projects.type';
import React from 'react';

interface ProjectByIdProps {
  params: { id: string };
}

export async function generateStaticParams() {
  const url = HTTP.HOST + HTTP.PROJECT_PATH;
  const posts = await fetch(url).then((res) => res.json());

  return posts.map((post: ProjectsType) => ({
    id: post._id,
  }));
}

const ProjectsId: React.FC<ProjectByIdProps> = ({ params }) => {
  return (
    <>
      <Project id={params.id} />
    </>
  );
};

export default ProjectsId;
