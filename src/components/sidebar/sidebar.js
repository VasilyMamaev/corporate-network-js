import React from 'react'
import styles from './sidebar.module.css'
import workyUser from '../../assets/workyUser.png'
import user from '../../assets/user.png'
import { connect } from 'react-redux'
import { setCurrentChatTypeAC } from '../../redux/contacts-reducer'



function Sidebar({type,setCurrentChat}) {

  const clickHandler = (type) => {
    setCurrentChat(type)
  }

  return (
    <div className={styles.wrapper}>
      <div 
        className={`${styles.item} ${type === "work" ? styles.active : null}`}
        onClick={() => clickHandler("work")}
      >
        <img src={workyUser} alt="pic" style={{width: 40, height: 40}} />
        рабочая переписка
      </div>
      <div
        className={`${styles.item} ${type === "basic" ? styles.active : null}`}
        onClick={() => clickHandler("basic")}>
      <img src={user} alt="pic" style={{width: 40, height: 40}} />
        нерабочая переписка
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  type: state.contacts.currentChatType
})

export default connect(mapStateToProps, {setCurrentChat: setCurrentChatTypeAC})(Sidebar)