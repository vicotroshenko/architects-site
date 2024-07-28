import { HttpMessages } from '@/constants/HttpMessages.constants';
import { HttpStatusCode } from '@/constants/HttpStatusCode.constant';
import { ids } from '@/constants/ids.constant';
import Architect from '@/models/architect';
import { connectToDB } from '@/utils/database';


export function generateStaticParams(){
  return ids
};

interface ProjectByIdProps {
  params: { id: string };
}

export const GET = async (request: unknown, { params }: ProjectByIdProps) => {
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