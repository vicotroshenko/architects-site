import { HTTP } from '@/constants/service.constant';
import { ProjectsType } from '@/types/projects.type';

type Result = ProjectsType | null;
let result: Result = null;

export async function getParams() {
  const url = HTTP.HOST + HTTP.PROJECT_PATH;
  if (result) {
    return result;
  }
  const posts = await fetch(url).then((res) => res.json());
  const ids = posts.map((post: ProjectsType) => ({
    id: post._id,
  }));
  result = ids;
  return ids;
}
