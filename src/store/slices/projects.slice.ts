// import { getProjectById, getProjects } from '@/service/projects';
import { ProjectsType } from '@/types/projects.type';
import { StateCreator } from 'zustand';



import data from '../../../public/data/data.json';
import { ProjectsStoreType } from '../types.store';


const initialProjectsState = {
  projects: null,
  project: null,
  isLoading: false,
  isError: false,
  errorMessage: null,
};

export const createProjectsSlice: StateCreator<ProjectsStoreType> = (set) => ({
  ...initialProjectsState,
  getAllProjects: async (): Promise<void> => {
    try {
      set({ isLoading: true, isError: false, errorMessage: null });
      //const data = await getProjects();
      const result = data as unknown[];
      set({
        projects: result as ProjectsType[],
        isLoading: false,
      });
    } catch (error) {
      set({ isLoading: false, isError: true, errorMessage: error });
    }
  },
  getProject: async (id: string): Promise<void> => {
    try {
      set({ isLoading: true, isError: false, errorMessage: null });
      // const data = await getProjectById(id);
      const result = data.find((item) => item._id === id) as unknown;
      set({
        project: result as ProjectsType,
        isLoading: false,
      });
    } catch (error) {
      set({ isLoading: false, isError: true, errorMessage: error });
    }
  },
});