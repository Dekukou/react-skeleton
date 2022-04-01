import { Typography, Link as MUILink } from '@mui/material';
import { Link } from 'react-router-dom';
import { LoginForm } from '@/features/auth';

const Login = () => {
  return (
    <>
      <Typography color="grey.500" my={3}>
        Dear user, log in to continue
      </Typography>
      <LoginForm />
      <MUILink component={Link} to="/register" color="primary.main">
        Don't have an account? Register
      </MUILink>
    </>
  );
};

export default Login;
