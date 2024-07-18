import { HTTP } from '@/constants/service.constant';


export const getProjects = async () => {
  try {
    const url = HTTP.HOST + HTTP.PROJECT_PATH;
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};

export const getProjectById = async (id: string) => {
  try {
    const url = HTTP.HOST + HTTP.PROJECT_PATH + id;
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};