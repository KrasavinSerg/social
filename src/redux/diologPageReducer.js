const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
  diologData : [
    {id : '1', name : 'User 1', ava : 'https://img.icons8.com/color/48/000000/ninja-head.png'},
    {id : '2', name : 'User 2', ava : 'https://img.icons8.com/color/48/000000/ninja-head.png'},
    {id : '3', name : 'User 3', ava : 'https://img.icons8.com/color/48/000000/ninja-head.png'}
  ],
  messageData : [
    {message : 'Lorem, ipsum.'},
    {message : 'Lorem ipsum dolor sit.'},
    {message : 'Lorem'},
  ],
  newMessageText : ''
};

const diologPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE: 
      let newMessage = {
        message : state.newMessageText
      };

      return {
        ...state,
        messageData : [...state.messageData, newMessage],
        newMessageText : ''
      };

    case UPDATE_NEW_MESSAGE_TEXT:
      return {
        ...state,
        newMessageText : action.newText
      };

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