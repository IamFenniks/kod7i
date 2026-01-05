import React from 'react';
import css from './Chat.module.css';
import Dialogs from './Dialogs/Dialogs';
import Messages from './Messages/Messages';

const Chat = (props) => {
  return (
    <div className={css.chat}>
      <Dialogs />

      <Messages />
    </div>
  );
}

export default Chat;