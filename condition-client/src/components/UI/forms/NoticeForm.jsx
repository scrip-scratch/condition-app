import React, { useState } from 'react'
import Button from '../buttons/Button'
import classes from './NoticeForm.module.css'

function NoticeForm() {

  const [noticeText, setNoticeText] = useState('');



  const closeNotice = () => {
    const noticeForm = document.getElementById('noticeForm');
    if(noticeForm) noticeForm.style.display = 'none';
  }  

  const addNotice = (event) => {
    event.preventDefault();  
  
    console.log(noticeText)

    setNoticeText('');
    closeNotice();

  }

  return (
    <form id='noticeForm' className={classes.noticeForm} >
        <textarea 
          className='textarea' 
          type="text" 
          placeholder="..." 
          cols="30" 
          rows="5" 
          onChange={e => setNoticeText(e.target.value)}
          />
        <div onClick={() => closeNotice()} className={classes.closeNotice}></div>
        <Button  color='#EE2935' onClick={addNotice}>
            добавить запись
        </Button>
    </form>
  )
}

export default NoticeForm