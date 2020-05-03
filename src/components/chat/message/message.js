import React, { useState } from "react";
import styles from "./message.module.css";
import Portal from "../../portal/portal";

const Message = ({ message, interlocutor }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const showHandler = () => setModalVisible(true);
  const exitHandler = () => setModalVisible(false);

  const convertTimestamp = (timestamp) => {
    const date = new Date( timestamp * 1000 );
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    // показываем в нужном формате: 11:17:23 
    return hours + ':' + minutes + ':' + seconds ;
  }

  return (
    <article className={`${styles.message} ${styles[message.direction]}`}>
      <span>{message.direction === "outcome" ? "Вы" : `${interlocutor}`}</span>
      <p>
        {message.image ? (
          <img alt="img" src={message.image} onClick={showHandler} width="40" />
        ) : null}
        {message.text}
      </p>
      <small>
        {convertTimestamp(message.date)}
      </small>
      {isModalVisible ? (
        <Portal exitHandler={exitHandler} img={message.image} />
      ) : null}
    </article>
  );
};

export default Message;
