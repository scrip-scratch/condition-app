import React from 'react'
import { useState, useContext } from 'react';
import { Context } from '../../index';
import { registration } from '../../http/userAPI';
import classes from './Auth.module.css';
import Button from '../UI/buttons/Button';
import { LOGIN_ROUTE } from '../../utils/consts';
import { useNavigate } from 'react-router-dom';

function Registration () {

    const {user} = useContext(Context);
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const auth = async (name, email, password) => {
        try {
            let data = await registration(name, email, password);
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
                placeholder='Логин' 
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
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
                color='#4957ED' 
                onClick={(e) => {
                    e.preventDefault();
                    auth(name, email, password);
                }}>
                Зарегистрироваться
            </Button>
            <p>Есть аккаунт? <a href={LOGIN_ROUTE}>Войдите</a></p>
        </form> 
  )
}

export default Registration;