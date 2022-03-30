import { styled } from '@mui/material/styles';

const Logo = styled('div')({
  '&': {
    animation: 'breathing 4s linear infinite',
  },
  '@keyframes breathing': {
    '0%': {
      transform: 'scale(1)',
    },
    '50%': {
      transform: 'scale(0.95)',
    },
    '100%': {
      transform: 'scale(1)',
    },
  },
});

export { Logo };
