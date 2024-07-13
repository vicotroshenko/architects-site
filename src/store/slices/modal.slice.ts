import { StateCreator } from 'zustand';

import { ModalStoreType } from '../types.store';

export const createModalSlice: StateCreator<ModalStoreType> = (set) => ({
  isOpen: false,
  setModal: () => {
    set((state) => ({
      isOpen: !state.isOpen,
    }));
  },
  openModal: () => {
    set({
      isOpen: true,
    });
  },
  closeModal: () => {
    set({
      isOpen: false,
    });
  },
});
