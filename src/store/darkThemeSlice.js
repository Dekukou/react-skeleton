const initialMode =
  localStorage.getItem('darkMode') === 'true' ??
  window.matchMedia('(prefers-color-scheme: dark)').matches;

const darkThemeSlice = (set) => ({
  darkTheme: initialMode,
  toggleDarkTheme: () => {
    set((state) => {
      localStorage.setItem('darkMode', !state.darkTheme);
      return { ...state, darkTheme: !state.darkTheme };
    });
  },
});

export default darkThemeSlice;
