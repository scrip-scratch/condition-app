import React from 'react'
import Button from '../components/UI/buttons/Button'
import classes from './Enter.module.css'

function Enter() {
  return (
        <form className={classes.enterForm}>
            <p>
                <label>Логин</label>
                <input />
            </p>
            <p>
                <label>Пароль</label>
                <input type='password'/>
            </p>
            <Button color='#4957ED' onClick={() => console.log('ok')}>войти</Button>
            <a href="/reg">Зарегистрироваться?</a>
        </form>
  )
}

export default Enter