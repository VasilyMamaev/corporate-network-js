import React from 'react'
import styles from './message.module.css'

const Message = ({message}) => {
  return (
    <article className={`${styles.message} ${message.direction}`}>
      <p>{message.text}</p>
      <small>{message.date}</small>
    </article>
  )
}

export default Message
