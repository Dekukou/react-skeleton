import useStore from '@/store/useStore';
import {
  useTheme,
  Link,
  AppBar,
  Toolbar,
  Box,
  List,
  ListItem,
} from '@mui/material';
import logo from '@/assets/imgs/react.png';
import { NavLink as RRNavLink } from 'react-router-dom';
import DarkThemeToggle from '../DarkThemeToggle';

const NavLink = (props) => {
  const theme = useTheme();

  const activeStyle = {
    color: theme.palette.secondary.main,
  };

  return (
    <Link
      component={RRNavLink}
      {...props}
      underline="hover"
      style={({ isActive }) => (isActive ? activeStyle : null)}
    />
  );
};

const Navbar = () => {
  // TODO changement de logo en fonction du theme
  const darkTheme = useStore((state) => state.darkTheme);

  return (
    <AppBar position="static" color="inherit">
      <Toolbar variant="dense">
        <NavLink to="/">
          <img src={logo} alt="logo" height="40px" />
        </NavLink>
        <Box flexGrow={1}>
          <List
            sx={{
              display: 'flex',
              '& .MuiListem-root': {
                width: 'auto',
              },
            }}
          >
            {/* <ListItem>
              <NavLink to="/">Home</NavLink>
            </ListItem> */}
          </List>
        </Box>
        <DarkThemeToggle />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
