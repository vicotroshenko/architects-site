import { create } from 'zustand';

import { createModalSlice } from './slices/modal.slice';
import { createProjectsSlice } from './slices/projects.slice';
import { ModalStoreType, ProjectsStoreType } from './types.store';

type StoreType = ProjectsStoreType & ModalStoreType;

export const useGlobalStore = create<StoreType>((...a) => ({
  ...createProjectsSlice(...a),
  ...createModalSlice(...a),
}));
