import React, { useState } from "react";
import styles from "./message.module.css";
import Portal from "../../portal/portal";

const Message = React.memo(
  ({ message, interlocutor, deleteMessage, editMessage }) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [messageOnEdit, setMessageOnEdit] = useState(false);
    const [messageEdit, setMessageEdit] = useState(message.text);

    const exitHandler = () => setModalVisible(false);
    const onEditKeyHandler = (evt) => {
      if (evt.key === "Escape") {
        setMessageOnEdit(false);
        setMessageEdit(message.text);
      }
      if (evt.key === "Enter") {
        if (messageEdit) {
          editMessage(message.date, messageEdit);
          setMessageOnEdit(false);
        } else {
          deleteMessage(message.date);
        }
      }
    };

    const convertTimestamp = (timestamp) => {
      let time = new Date(timestamp);
      let hours = time.getHours();
      let minutes = time.getMinutes();
      return "" + hours + ":" + minutes;
    };

    return (
      <article className={`${styles.message} ${styles[message.direction]}`}>
        <div className={styles.header}>
          <span>
            {message.direction === "outcome" ? "Вы" : `${interlocutor}`}
          </span>
          {message.direction === "outcome" ? (
            <i
              className="material-icons"
              onClick={() => setMessageOnEdit(true)}
            >
              edit
            </i>
          ) : null}

          <i
            className="material-icons"
            onClick={() => deleteMessage(message.date)}
          >
            clear
          </i>
        </div>
        {messageOnEdit ? (
          <input
            type="text"
            value={messageEdit}
            autoFocus
            onChange={(evt) => setMessageEdit(evt.target.value)}
            onBlur={() => setMessageOnEdit(false)}
            onKeyUp={onEditKeyHandler}
          />
        ) : (
          <p>
            {message.image ? (
              <img
                alt="img"
                src={message.image}
                onClick={() => setModalVisible(true)}
                width="40"
              />
            ) : null}
            {message.text}
          </p>
        )}
        <small>{convertTimestamp(message.date)}</small>
        {isModalVisible ? (
          <Portal exitHandler={exitHandler} img={message.image} />
        ) : null}
      </article>
    );
  }
);

export default Message;
