import { ProjectsType } from '@/types/projects.type';

export type ProjectsState = {
  projects: ProjectsType[] | null;
  project: ProjectsType | null;
  isLoading: boolean;
  isError: boolean;
  errorMessage: unknown | null;
};

export type ProjectActions = {
  getAllProjects: () => Promise<void>;
  getProject: (id: string) => Promise<void>;
};

export type ProjectsStoreType = ProjectsState & ProjectActions;

type ModalSliceState = {
  isOpen: boolean;
};

type ModalSliceAction = {
  setModal: () => void;
  openModal: () => void;
  closeModal: () => void;
};

export type ModalStoreType = ModalSliceState & ModalSliceAction;
