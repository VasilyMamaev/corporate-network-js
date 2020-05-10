import React, { useState } from "react";
import styles from "./message-creator.module.css";

const MessageCreator = ({ addMessage, chatType }) => {
  const [text, setText] = useState();
  const [image, setImage] = useState(null);

  const changeTextHandler = (evt) => {
    setText(evt.target.value);
  };
  const sendMessageHandler = () => {
    if (text) {
      addMessage({
        date: new Date(
          
        ),
        text: text,
        direction: "outcome",
        type: chatType,
        image,
      });
      setText("");
      setImage(null);
    }
  };
  const keyEnterPressHandler = (evt) => {
    if (evt.key === "Enter" && evt.ctrlKey) {
      sendMessageHandler();
    }
  };

  const imageInputHandler = (evt) => {
    const file = evt.target.files[0];
    const reader = new FileReader();
    reader.onload = function (evt) {
      setImage(evt.target.result);
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className={styles.messageCreator}>
      <label className={styles.imgInput}>
        <i className="material-icons">add_photo_alternate</i>
        <input
          type="file"
          multiple={false}
          accept="image/*"
          onChange={imageInputHandler}
        />
      </label>

      <textarea
        autoFocus
        maxLength="140"
        placeholder="Введите сообщение..."
        value={text}
        onChange={changeTextHandler}
        onKeyUp={keyEnterPressHandler}
      />
      <div className={styles.sendButton}>
        <button onClick={sendMessageHandler}>
          <i className="material-icons">send</i>
        </button>
        <small>Enter + Ctrl</small>
      </div>
      {image ? <img src={image} alt="img" width="40" height="40" /> : null}
    </div>
  );
};

export default MessageCreator;
