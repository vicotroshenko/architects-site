import { HttpMessages } from '@/constants/HttpMessages.constants';
import { HttpStatusCode } from '@/constants/HttpStatusCode.constant';
import { HTTP } from '@/constants/service.constant';
import Architect from '@/models/architect';
import { ProjectsType } from '@/types/projects.type';
import { connectToDB } from '@/utils/database';

export async function generateStaticParams() {
  const url = HTTP.HOST + HTTP.PROJECT_PATH;
  const posts = await fetch(url).then((res) => res.json());

  return posts.map((post: ProjectsType) => ({
    id: post._id,
  }));
}

interface Params {
  params: {
    [x: string]: string;
  };
}
export const GET = async (request: unknown, { params }: Params) => {
  try {
    await connectToDB();
    const result = await Architect.findById(params.id).exec();
    if (!result)
      return new Response(HttpMessages.NotFound, {
        status: HttpStatusCode.NotFound,
      });

    return new Response(JSON.stringify(result), { status: HttpStatusCode.Ok });
  } catch (error) {
    return new Response(HttpMessages.InternalServerError, {
      status: HttpStatusCode.InternalServerError,
    });
  }
};
