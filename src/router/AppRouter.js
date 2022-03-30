import history from './browserHistory';
import CustomRouter from './CustomRouter';
import Routes from './Routes';

const AppRouter = () => {
  return (
    <CustomRouter history={history}>
      <Routes />
    </CustomRouter>
  );
};

export default AppRouter;
