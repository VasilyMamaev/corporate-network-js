import React from 'react'
import { connect } from 'react-redux'
import styles from './chat.module.css' 
import Message from './message/message'
import MessageCreator from './message-creator/message-creator'
import { addMessageTC } from '../../redux/chat-reducer'

const Chat = ({messages, addMessage}) => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.messages}>
        {messages.map(message => (
          <Message message={message} key={message.date} />
        ))}
      </section>
      <div className={styles.messageCreator}>
        <MessageCreator addMessage={addMessage} />
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    messages: state.chat.messages
  }
}

export default connect(mapStateToProps, {addMessage: addMessageTC})(Chat)
