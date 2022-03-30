import create from 'zustand';
import darkThemeSlice from './darkThemeSlice';

const useStore = create((set, get) => ({
  ...darkThemeSlice(set, get),
}));

export default useStore;
