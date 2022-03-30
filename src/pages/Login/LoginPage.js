import React, { useState } from 'react';
import { Button, TextField, Paper, Box } from '@mui/material';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      position="relative"
      justifyContent="center"
      alignItems="center"
    >
      <Paper
        elevation={3}
        sx={{ display: 'flex', flexDirection: 'column', p: 2, gap: 1 }}
      >
        <TextField
          hiddenLabel
          defaultValue="Email"
          // variant="filled"
          size="small"
        />
        <TextField
          hiddenLabel
          defaultValue="Password"
          // variant="filled"
          size="small"
        />
        <Button block size="lg" type="submit">
          Login
        </Button>
      </Paper>
    </Box>
  );
};

export default LoginPage;
