import { HttpMessages } from '@/constants/HttpMessages.constants';
import { HttpStatusCode } from '@/constants/HttpStatusCode.constant';
import { getParams } from '@/helpers/getParams.helper';
import Architect from '@/models/architect';
import { connectToDB } from '@/utils/database';


export async function generateStaticParams(){
  return await getParams()
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