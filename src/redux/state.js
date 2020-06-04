const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
  _state : {
    profilePage : {
      postData : [
        {id : 1, message : 'Hi, how are you?', likeCount : 15},
        {id : 2, message : 'It"s my first post', likeCount : 12}
      ],
      newPostText : 'it-kamasutra.com'
    },
    diologPage : {
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
    },
    sidedar : {
      friends : [
        {id : '1', name : 'Sasha', ava : 'https://img.icons8.com/color/48/000000/teenager-male.png'},
        {id : '2', name : 'Pety', ava : 'https://img.icons8.com/color/48/000000/fashion-trend.png'},
        {id : '3', name : 'Mila', ava : 'https://img.icons8.com/color/48/000000/kim-kardashian-2.png'}
      ]
    }
  },
 
  _callSubscriber () {
    console.log('State changed');
  },

  getState () {
    return this._state;
  },

  subscribe (observer) {
    this._callSubscriber = observer;
  },

  dispatch (action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id : 5, 
        message : this._state.profilePage.newPostText, 
        likeCount : 0
      };
      
      this._state.profilePage.postData.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    } 
    else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } 
    else if (action.type === ADD_MESSAGE) {
      let newMessage = {
        message : this._state.diologPage.newMessageText
      };
    
      this._state.diologPage.messageData.push(newMessage);
      this._state.diologPage.newMessageText = '';
      this._callSubscriber(this._state);
    }
    else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.diologPage.newMessageText = action.newText;
      this._callSubscriber(this._state);
    }
  }
}

export const addPostActionCreater = () => {
  return {
    type : ADD_POST
  }
};

export const updateNewPostTextActionCreater = (text) => {
  return {
    type : UPDATE_NEW_POST_TEXT,
    newText : text
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

export default store;
