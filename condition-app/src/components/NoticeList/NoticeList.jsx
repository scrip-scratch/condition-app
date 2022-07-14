import React from 'react'
import classes from './NoticeList.module.css'

function NoticeList() {
  return (
    <div className={classes.noticeList}>
        <div className={classes.noticeItem}>
            <p className={classes.noticeDate}>22.12.12 09:55</p>
            <p className={classes.noticeText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus rerum illum nostrum aspernatur, corrupti id. Laboriosam maxime molestiae nisi architecto explicabo quibusdam, corporis harum nemo odit accusantium quos non. Nulla.
                Pariatur culpa obcaecati adipisci et molestias impedit quae? Voluptatum ex, quis dolor voluptas laboriosam odio et quas perferendis eius autem maxime doloribus quaerat unde beatae dolore, labore voluptates repellat. Excepturi!
                Dignissimos voluptatibus sequi quibusdam veniam magnam inventore corrupti nisi, quam odio beatae corporis nulla voluptatem voluptates, incidunt autem eaque laboriosam, ex quidem. Id autem placeat facere harum, fuga quae nulla.
            </p>
        </div>
        <div className={classes.noticeItem}>
            <p className={classes.noticeDate}>13.12.12 09:55</p>
            <p className={classes.noticeText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus rerum illum nostrum aspernatur, corrupti id. Laboriosam maxime molestiae nisi architecto explicabo quibusdam, corporis harum nemo odit accusantium quos non. Nulla.
                Pariatur culpa obcaecati adipisci et molestias impedit quae? Voluptatum ex, quis dolor voluptas laboriosam odio et quas perferendis eius autem maxime doloribus quaerat 
            </p>
        </div>
        <div className={classes.noticeItem}>
            <p className={classes.noticeDate}>03.12.12 09:55</p>
            <p className={classes.noticeText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus rerum illum nostrum aspernatur, corrupti id. Laboriosam maxime molestiae nisi architecto explicabo quibusdam, corporis harum nemo odit accusantium quos non. Nulla.
                Pariatur culpa obcaecati adipisci et molestias impedit quae? Voluptatum ex, quis dolor voluptas laboriosam odio et quas perferendis eius autem maxime doloribus quaerat unde beatae dolore, labore voluptates repellat. Excepturi!
                Dignissimos voluptatibus sequi quibusdam veniam magnam inventore corrupti nisi, quam odio beatae corporis nulla voluptatem voluptates, incidunt autem eaque laboriosam, ex quidem. Id autem placeat facere harum, fuga quae nulla.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus rerum illum nostrum aspernatur, corrupti id. Laboriosam maxime molestiae nisi architecto explicabo quibusdam, corporis harum nemo odit accusantium quos non. Nulla.
                Pariatur culpa obcaecati adipisci et molestias impedit quae? Voluptatum ex, quis dolor voluptas laboriosam odio et quas perferendis eius autem maxime doloribus quaerat unde beatae dolore, labore voluptates repellat. Excepturi!
                Dignissimos voluptatibus sequi quibusdam veniam magnam inventore corrupti nisi, quam odio beatae corporis nulla voluptatem voluptates, incidunt autem eaque laboriosam, ex quidem. Id autem placeat facere harum, fuga quae nulla.
            </p>
        </div>      
    </div>
  )
}

export default NoticeList