import React from 'react';
import s from './Diologs.module.scss';
import DiologItem from './DiologItem/DiologItem';
import Message from './Message/Message';

const Diologs = (props) => {
  
  let state = props.dialogPage;

  let diologElement = state.diologData.map((el) => <DiologItem name={el.name} id={el.id} ava={el.ava} />);
  
  let messageElement = state.messageData.map((el) => <Message message={el.message} />);
  
  let onAddMessage = () => {
    props.addMessage();
  }

  let onMessageChange = (e) => {
    let text = e.target.value;
    props.updateNewMessage(text);
  };

  return (
    <div className={s.dialog_wrapper}>
      <ul>
        {diologElement}
      </ul>
      <ul>
        {messageElement}
      </ul>
      <div>
        <textarea 
          onChange={onMessageChange} 
          placeholder='Enter your nessage' 
          value={state.newMessageText}>
        </textarea>
        <button onClick={onAddMessage}>Add text</button>
      </div>
    </div>
  );
}

export default Diologs;