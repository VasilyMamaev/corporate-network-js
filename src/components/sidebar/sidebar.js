import React from 'react'
import styles from './sidebar.module.css'
import workyUser from '../../assets/workyUser.png'
import user from '../../assets/user.png'



function Sidebar() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <img src={workyUser} alt="pic" style={{width: 40, height: 40}} />
        рабочая переписка
      </div>
      <div className={styles.item}>
      <img src={user} alt="pic" style={{width: 40, height: 40}} />
        нерабочая переписка
      </div>
    </div>
  )
}

export default Sidebar