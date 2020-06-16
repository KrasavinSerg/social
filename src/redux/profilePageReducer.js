const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  postData : [
    {id : 1, message : 'Hi, how are you?', likeCount : 15},
    {id : 2, message : 'It"s my first post', likeCount : 12}
  ],
  newPostText : 'it-kamasutra.com'
};

const profilePageReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id : 5, 
        message : state.newPostText, 
        likeCount : 0
      };

      return {
        ...state,
        postData : [...state.postData, newPost],
        newPostText : ''
      }

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText : action.newText
      }

    default: 
      return state;  
  };
};

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

export default profilePageReducer;