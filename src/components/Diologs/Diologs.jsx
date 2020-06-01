import React from 'react';
import s from './Diologs.module.scss';
import DiologItem from './DiologItem/DiologItem';
import Message from './Message/Message';


const Diologs = (props) => {

  let diologElement = props.diologPage.diologData.map((el) => <DiologItem name={el.name} id={el.id} ava={el.ava} />);
  
  let messageElement = props.diologPage.messageData.map((el) => <Message message={el.message} />);
  
  let newTextElement = React.createRef();
  
  let addMessage = () => {
    props.addMessage();
  }

  let onMessageChange = () => {
    let text = newTextElement.current.value;
    props.updateNewMessageText(text);
  };

  return (
    <div className={s.dialog_wrapper}>
      <ul>
        {diologElement}
      </ul>
      <ul>
        {messageElement}
      </ul>
      <textarea onChange={onMessageChange} ref={newTextElement} value={props.diologPage.newMessageText}></textarea>
      <button onClick={addMessage}>Add text</button>
    </div>
  );
}

export default Diologs;