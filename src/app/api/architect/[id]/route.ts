import { HttpMessages } from '@/constants/HttpMessages.constants';
import { HttpStatusCode } from '@/constants/HttpStatusCode.constant';
import { ids } from '@/constants/ids.constant';
import Architect from '@/models/architect';
import { connectToDB } from '@/utils/database';
import data from '../../../../../public/data/data.json';

export function generateStaticParams(){
  return ids
};

interface ProjectByIdProps {
  params: { id: string };
}

export async function GET(request: unknown, { params }: ProjectByIdProps) {
  try {
    await connectToDB();
    // const result = await Architect.findById(params.id).exec();
    const result = data.find((item) => item._id === params.id);
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