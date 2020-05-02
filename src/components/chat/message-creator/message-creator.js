import React, { useState } from 'react'

const MessageCreator = ({addMessage}) => {

  const [text, setText] = useState()

  const changeTextHandler = evt => {
    setText(evt.target.value)
  }

  const sendMessageHandler = () => {
    addMessage({
      date: Date.now(),
      text: text,
      direction: "outcome"
    })
  }

  return (
    <div>
      <textarea
      autoFocus
      maxLength="140"
      placeholder="Введите сообщение..."
      value={text}
      onChange={changeTextHandler}
      />

      <button onClick={sendMessageHandler}/>      
    </div>
  )
}

export default MessageCreator
