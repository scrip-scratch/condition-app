import React from 'react'
import Button from '../components/UI/buttons/Button'
import classes from './Reg.module.css'

function Reg() {
  return (
    <form className={classes.regForm}>
            <p>
                <label>Логин</label>
                <input />
            </p>
            <p>
                <label>Пароль</label>
                <input type='password'/>
            </p>
            <p>
                <label className={classes.passwordAgain}>Повторите<br/>пароль</label>
                <input type='password'/>
            </p>
            <p>
                <label>Почта</label>
                <input type='email' />
            </p>
            <Button color='#4957ED' onClick={() => console.log('ok')}>отправить запрос на почту</Button>
        </form>
  )
}

export default Reg