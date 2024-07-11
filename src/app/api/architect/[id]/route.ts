import Architect from '@/models/architect';
import { connectToDB } from '@/utils/database';

interface Params {
  params: {
    [x: string]: string;
  };
}
export const GET = async (request: unknown, { params }: Params) => {
  try {
    await connectToDB();

    const prompt = await Architect.findById(params.id);
    if (!prompt) return new Response('Prompt Not Found', { status: 404 });

    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response('Internal Server Error', { status: 500 });
  }
};
