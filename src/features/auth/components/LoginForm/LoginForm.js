import React from 'react';
import { Formik, Field, Form } from 'formik';
import { Button, Box } from '@mui/material';
import { LockOpen } from '@mui/icons-material';
import * as Yup from 'yup';
import { TextField } from 'formik-mui';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { setAccessToken } from '@/utils/access_token';

const loginSchema = Yup.object().shape({
  email: Yup.string().required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const LoginForm = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const redirectTo = searchParams.get('redirect-to');

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={loginSchema}
      onSubmit={async (values, { setSubmitting }) => {
        // const params = new URLSearchParams();
        // const data = {
        //   ...values,
        axios
          .post(`${process.env.REACT_APP_API_URL}/auth/login`, values)
          .then((res) => {
            setAccessToken(res.data.access_token);
            navigate(redirectTo || '/');
          })
          .catch((err) => {
            toast.error(err.response.data.message);
          })
          .finally(() => {
            navigate(redirectTo || '/');

            setSubmitting(false);
          });
      }}
    >
      <Form>
        <Box mb={1}>
          <Field
            name="email"
            type="email"
            label="Email"
            component={TextField}
            variant="outlined"
            fullWidth
            size="small"
          />
        </Box>
        <Box mb={1}>
          <Field
            name="password"
            type="password"
            label="Password"
            component={TextField}
            variant="outlined"
            fullWidth
            size="small"
          />
        </Box>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          startIcon={<LockOpen />}
        >
          Login
        </Button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
