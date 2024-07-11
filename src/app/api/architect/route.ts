import Architect from '@/models/architect';
import { connectToDB } from '@/utils/database';

export const GET = async () => {
  try {
    await connectToDB();

    const prompts = await Architect.find();
    console.log('prompts: ', prompts);

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response('Failed to fetch all prompts', { status: 500 });
  }
};
