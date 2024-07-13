import { getProjectById, getProjects } from '@/service/projects';
import { StateCreator } from 'zustand';

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
      const data = await getProjects();
      set({
        projects: data,
        isLoading: false,
      });
    } catch (error) {
      set({ isLoading: false, isError: true, errorMessage: error });
    }
  },
  getProject: async (id: string): Promise<void> => {
    try {
      set({ isLoading: true, isError: false, errorMessage: null });
      const data = await getProjectById(id);
      set({
        project: data,
        isLoading: false,
      });
    } catch (error) {
      set({ isLoading: false, isError: true, errorMessage: error });
    }
  },
});
