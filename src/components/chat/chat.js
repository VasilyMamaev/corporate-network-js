import React from "react";
import { connect } from "react-redux";
import styles from "./chat.module.css";
import Message from "./message/message";
import MessageCreator from "./message-creator/message-creator";
import {
  addMessageTC,
  deleteMessageAC,
  editMessageAC,
} from "../../redux/chat-reducer";

const Chat = ({
  messages,
  addMessage,
  interlocutorId,
  contacts,
  chatType,
  deleteMessage,
  editMessage,
}) => {
  const interlocutor = contacts.find((c) => c.id === interlocutorId).name;

  return (
    <div className={styles.wrapper}>
      <section className={styles.messages}>
        {messages.map((message) =>
          chatType === message.type ? (
            <Message
              message={message}
              key={message.date}
              interlocutor={interlocutor}
              chatType={chatType}
              deleteMessage={deleteMessage}
              editMessage={editMessage}
            />
          ) : null
        )}
      </section>
      <div className={styles.messageCreator}>
        <MessageCreator addMessage={addMessage} chatType={chatType} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    messages: state.chat.messages,
    chatType: state.contacts.currentChatType,
    interlocutorId: state.contacts.currentInterlocutor,
    contacts: state.contacts.contacts,
  };
};

export default connect(mapStateToProps, {
  addMessage: addMessageTC,
  deleteMessage: deleteMessageAC,
  editMessage: editMessageAC,
})(Chat);
