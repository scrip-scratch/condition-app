import React from 'react'
import { useState, useContext } from 'react';
import { Context } from '../../index';
import { login } from '../../http/userAPI';
import classes from './Auth.module.css';
import Button from '../UI/buttons/Button';
import { REGISTRATION_ROUTE } from '../../utils/consts';
import { useNavigate } from 'react-router-dom';

function Login () {

    const {user} = useContext(Context);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = async (email, password) => {
        try {
            let data = await login(email, password);
            user.setUser(data);
            user.setIsAuth(true);
            navigate('/');
        } catch (e) {
            alert(e.response.data.messege);
        }
    }

    return (
        <form className={classes.enterForm}>
            <input
                placeholder='Email'  
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                placeholder='Пароль' 
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button
                style={{fontSize: '16px'}} 
                color='#4957ED' 
                onClick={(e) => {
                    e.preventDefault();
                    auth(email, password);
                }}>
                Войти
            </Button>
            <p>Нет аккаунта? <a href={REGISTRATION_ROUTE}>Зарегистрируйтесь</a></p>
            
        </form> 
  )
}

export default Login;