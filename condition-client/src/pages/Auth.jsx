import React from 'react';
import { useLocation } from 'react-router-dom';
import { LOGIN_ROUTE } from '../utils/consts'
import Registration from '../components/Auth/Registration';
import Login from '../components/Auth/Login';
import styled from 'styled-components';
import {observer} from 'mobx-react-lite';

const AuthWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`;

const Auth = observer (() => {

    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;

  return (
        <AuthWrap>
            {isLogin ? <Login /> : <Registration />}
        </AuthWrap> 
  )
})

export default Auth;