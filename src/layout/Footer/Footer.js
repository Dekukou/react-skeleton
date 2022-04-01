import { Box, Container, Paper } from '@mui/material';

const Footer = () => {
  return (
    <Box position="fixed" bottom="0" width="100%">
      <Paper sx={{ height: '50px', paddingY: 2 }}>
        <Container
          maxWidth="xxl"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div>{new Date().getFullYear()} Template</div>
          <Box display="flex" alignItems="center">
            Developped by Puig_j
          </Box>
        </Container>
      </Paper>
    </Box>
  );
};

export default Footer;
