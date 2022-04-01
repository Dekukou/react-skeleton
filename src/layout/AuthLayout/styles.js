import { styled, alpha } from '@mui/material/styles';
import loginBackground from '@/assets/imgs/login-background.png';

const Background = styled('div')({
  backgroundImage: `url(${loginBackground})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: '100vh',
  overflow: 'hidden',
  position: 'relative',
});

const Bevel = styled('div')(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? alpha(theme.palette.background.default, 0.7)
      : alpha(theme.palette.background.default, 0.15),
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,
  width: '100%',
  [theme.breakpoints.up('md')]: {
    width: '80%',
    transform: 'skew(-15deg) translateX(25%)',
  },
  [theme.breakpoints.up('lg')]: {
    width: '45%',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: theme.spacing(1),
    bottom: theme.spacing(1),
    right: theme.spacing(1),
    left: theme.spacing(1),
    border: `${theme.spacing(0.5)} solid ${theme.palette.warning.main}`,
    [theme.breakpoints.up('md')]: {
      top: theme.spacing(0),
      bottom: theme.spacing(0),
      borderTopWidth: 0,
      borderBottomWidth: 0,
      borderRightWidth: 0,
    },
  },
}));

const FormContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  [theme.breakpoints.up('md')]: {
    transform: 'translateY(-50%)',
    width: '40%',
  },
  [theme.breakpoints.up('lg')]: {
    width: '20%',
    left: '70%',
  },
}));

export { Background, Bevel, FormContainer };
