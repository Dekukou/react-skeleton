import { useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { Router } from 'react-router-dom';

const propTypes = {
  history: PropTypes.shape({
    listen: PropTypes.func.isRequired,
    location: PropTypes.shape().isRequired,
    action: PropTypes.string.isRequired,
  }).isRequired,
};

const CustomRouter = ({ history, ...props }) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      {...props}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  );
};

CustomRouter.propTypes = propTypes;

export default CustomRouter;
