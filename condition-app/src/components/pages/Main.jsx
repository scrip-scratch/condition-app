import React, { useState } from 'react'
import Chart from '../Chart/Chart'
import NoticeList from '../NoticeList/NoticeList'
import Button from '../UI/buttons/Button'
import AddCondForm from '../UI/forms/AddCondForm'
import NoticeForm from '../UI/forms/NoticeForm'
import Modal from '../UI/modals/Modal'

function Main() {

    const showNoticeForm = () => {
        const noticeForm = document.getElementById('noticeForm');
        noticeForm.style.display = 'flex';
      }
    
      const [modal, setModal] = useState(false);

  return (
    <div className="App">
      <Chart />
      <div className='chartButtons'>
        <Button color='#EE2935' onClick={() => setModal(true)}>добавить данные</Button>   
        <Button color='#4957ED' onClick={showNoticeForm}>создать заметку</Button>   
      </div>
      <NoticeForm />
      <NoticeList />
      <Modal visible={modal} setVisible={setModal}>
        <AddCondForm setVisible={setModal} />
      </Modal>
      
    </div>
  )
}

export default Main