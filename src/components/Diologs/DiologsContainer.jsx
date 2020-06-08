import React from 'react';
import {addMessageActionCreater, updateNewMessageActionCreater} from '../../redux/diologPageReducer'
import Diologs from './Diologs';


const DiologsContainer = (props) => {

  let state = props.store.getState().diologPage;
  
  let onAddMessage = () => {
    props.store.dispatch(addMessageActionCreater());
  }

  let onMessageChange = (text) => {
    props.store.dispatch(updateNewMessageActionCreater(text));
  };

  return <Diologs 
    addMessage={onAddMessage} 
    updateNewMessage={onMessageChange} 
    dialogPage={state}/>
}

export default DiologsContainer;