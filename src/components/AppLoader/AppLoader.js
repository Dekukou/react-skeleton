import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box, Fade } from '@mui/material';
import useStore from '@/store/useStore';
import logo from '@/images/react.png';
import * as S from './styles';

const AppLoader = ({ delay }) => {
  const [visible, setVisible] = useState(false);
  const darkTheme = useStore((state) => state.darkTheme);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, []);

  return visible ? (
    <Box
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <S.Logo>
        <Fade in={visible} timeout={200}>
          {/* TODO changement de logo en fonction du theme */}
          <img src={logo} alt="logo" height="50" />
        </Fade>
      </S.Logo>
    </Box>
  ) : null;
};

AppLoader.propTypes = {
  delay: PropTypes.number,
};

AppLoader.defaultProps = {
  delay: 150,
};

export default AppLoader;
