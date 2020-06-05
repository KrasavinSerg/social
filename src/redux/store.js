import profilePageReducer from './profilePageReducer';
import diologPageReducer from './diologPageReducer';
import sidedarReducer from './sidedarReducer';

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

    this._state.profilePage = profilePageReducer(this._state.profilePage, action);
    this._state.diologPage = diologPageReducer(this._state.diologPage, action);
    this._state.sidedar = sidedarReducer(this._state.sidedar, action);

    this._callSubscriber(this._state);
  }
}

export default store;
