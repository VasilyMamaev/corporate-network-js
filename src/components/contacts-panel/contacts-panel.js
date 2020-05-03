import React, { useState } from 'react'
import styles from './contacts-panel.module.css'
import { connect } from 'react-redux'
import { getMessagesTC } from '../../redux/chat-reducer'
import { getCurrentInterlocutorTC } from '../../redux/contacts-reducer'

const ContactsPanel = ({contacts, getMessages, getCurrentInterlocutor}) => {

  const [activeContact, setActiveContact] = useState(contacts[0].id)

  const chooseHandler = (id) => {
    setActiveContact(id)
    getCurrentInterlocutor(id)
    getMessages(id)
  }

  return (
    <div className={styles.wrapper}>
      <div>
        настройки
      </div>
      <div>
        {contacts.map(contact => {
          return (
            <div
              className={`${styles.contact} ${activeContact === contact.id ? styles.active : null}`}
              key={contact.id}
              onClick={() => chooseHandler(contact.id)}
            >
              <img className={styles.avatar} src={contact.avatar} alt={`avatar ${contact.name}`} />
              <span>{contact.name}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  contacts: state.contacts.contacts
})

export default connect(mapStateToProps, {
  getMessages: getMessagesTC,
  getCurrentInterlocutor: getCurrentInterlocutorTC
})(ContactsPanel)
