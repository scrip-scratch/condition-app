import React, { useState } from 'react'
import Chart from '../components/Chart/Chart'
import NoticeList from '../components/NoticeList/NoticeList'
import Button from '../components/UI/buttons/Button'
import AddCondForm from '../components/UI/forms/AddCondForm'
import NoticeForm from '../components/UI/forms/NoticeForm'
import Modal from '../components/UI/modals/Modal'

function Main() {

  const data = [
    {
      name: '12-12-21',
      phis: 5,
      emo: 6,
      soul: 7,
    },
    {
      name: 'Page A',
      phis: 4,
      emo: 3,
      soul: 6,
    },
    {
      name: 'Page A',
      phis: 8,
      emo: 4,
      soul: 4,
    },
    {
      name: 'Page A',
      phis: 8,
      emo: 8,
      soul: 8,
    },
    {
      name: '12-12-21',
      phis: 5,
      emo: 6,
      soul: 7,
    },
    {
      name: 'Page A',
      phis: 4,
      emo: 3,
      soul: 6,
    },
    {
      name: 'Page A',
      phis: 8,
      emo: 4,
      soul: 4,
    },
    {
      name: 'Page A',
      phis: 8,
      emo: 8,
      soul: 8,
    },
  ];

    const showNoticeForm = () => {
        const noticeForm = document.getElementById('noticeForm');
        noticeForm.style.display = 'flex';
      }
    
      const [modal, setModal] = useState(false);

  return (
    <div className="App">
      <Chart data={data}/>
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