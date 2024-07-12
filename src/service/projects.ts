import { HTTP } from "@/constants/service.constant";

export const getProjects = async () => {
  const url = HTTP.HOST + HTTP.PROJECT_PATH;
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export const getProjectById = async (id: string) => {
  const url = HTTP.HOST + HTTP.PROJECT_PATH + id;
  const res = await fetch(url);
  const data = await res.json();
  return data;
};