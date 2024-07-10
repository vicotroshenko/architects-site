import Project from '@/components/Project/Project.component';
import React from 'react';


interface ProjectByIdProps {
  params: { id: string };
}

export  function generateStaticParams() {
  // const posts = await fetch('https://.../posts').then((res) => res.json());

  // return posts.map((post) => ({
  //   slug: post.slug,
  // }));
	return [{
		id: ''
	}]
}

const ProjectsId: React.FC<ProjectByIdProps> = ({ params }) => {
  return (
    <>
      <Project id={params.id} />
    </>
  );
};

export default ProjectsId;