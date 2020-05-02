import React from 'react'
import styles from './contacts-panel.module.css'
import { connect } from 'react-redux'

const ContactsPanel = ({contacts}) => {



  return (
    <div className={styles.wrapper}>
      <div>
        настройки
      </div>
      <div>
        {contacts.map(contact => {
          return (
            <div className={styles.contact}>
              <img className={styles.avatar} src={contact.avatar} alt={`avatar ${contact.name}`}/>
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

export default connect(mapStateToProps, null)(ContactsPanel)
