export const getProjects = async () => {
  const res = await fetch('api/architect');
  const data = await res.json();
  return data;
};

export const getProjectById = async (id: string) => {
  const res = await fetch(`api/architect/${id}}`);
  const data = await res.json();
  return data;
};
