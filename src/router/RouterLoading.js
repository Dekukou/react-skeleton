import { Box, CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';

const RouterLoading = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(true);
    }, 150);

    return () => clearTimeout(timeout);
  });

  return visible ? (
    <Box
      display="flex"
      flexDirection="column"
      flexGrow={1}
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress />
    </Box>
  ) : null;
};

export default RouterLoading;
