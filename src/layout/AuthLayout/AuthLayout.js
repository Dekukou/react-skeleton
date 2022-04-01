import { Outlet } from 'react-router-dom';
import logo from '@/assets/imgs/react.png';
import * as S from './styles';

const Auth = () => (
  <S.Background>
    <S.Bevel />
    <S.FormContainer>
      {/* <img src={logo} alt="logo" width="33%" /> */}
      <Outlet />
    </S.FormContainer>
  </S.Background>
);

export default Auth;
