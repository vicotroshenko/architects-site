import { HttpMessages } from '@/constants/HttpMessages.constants';
import { HttpStatusCode } from '@/constants/HttpStatusCode.constant';
import Architect from '@/models/architect';
import { connectToDB } from '@/utils/database';
import data from '../../../../public/data/data.json';
export const GET = async () => {
  try {
    await connectToDB();

    // const prompts = await Architect.find();
    const prompts = data;

    return new Response(JSON.stringify(prompts), { status: HttpStatusCode.Ok });
  } catch (error) {
    return new Response(HttpMessages.InternalServerError, {
      status: HttpStatusCode.InternalServerError,
    });
  }
};
