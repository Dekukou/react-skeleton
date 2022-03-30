import { IconButton, useTheme } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import useStore from '@/store/useStore';

const DarkThemeToggle = () => {
  const darkTheme = useStore((state) => state.darkTheme);
  const toggleDarkTheme = useStore((state) => state.toggleDarkTheme);
  const { white } = useTheme().palette.common;

  return (
    <IconButton onClick={toggleDarkTheme} size="large">
      {darkTheme ? <Brightness7 sx={{ fill: white }} /> : <Brightness4 />}
    </IconButton>
  );
};

export default DarkThemeToggle;
