import React from 'react'
import Button from '../buttons/Button'
import classes from './AddCondForm.module.css'

function AddCondForm({setVisible}) {

    const addCondition = (event) => {
        event.preventDefault();
        console.log("ok");
        setVisible(false);
    }

  return (
    <form action="#" className={classes.addCondForm}>
            <p className={classes.addCondFormHeader}>Состояние на текущий момент (от 1 до 10)</p>
            <div className={classes.addCondBlock}>
                <p>
                    <label className={classes.labelPhys}>Физическое</label>
                    <input placeholder='0' />
                </p>
                <p>
                    <label className={classes.labelEmo}>Эмоциональное</label>
                    <input placeholder='0'/>
                </p>
                <p>
                    <label className={classes.labelSoul}>Душевное</label>
                    <input placeholder='0'/>
                </p>
            </div>
        <Button color='#4957ED' onClick={addCondition}>создать заметку</Button>
        
    </form>
  )
}

export default AddCondForm