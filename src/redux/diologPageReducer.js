const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const diologPageReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        message : state.newMessageText
      };
    
      state.messageData.push(newMessage);
      state.newMessageText = '';
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state;
    default:
      return state;  
  }
};

export const addMessageActionCreater = () => {
  return {
    type : ADD_MESSAGE
  }
}

export const updateNewMessageActionCreater = (text) => {
  return {
    type : UPDATE_NEW_MESSAGE_TEXT,
    newText : text
  }
}

export default diologPageReducer;