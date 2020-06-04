const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profilePageReducer = (state, action) => {

  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id : 5, 
        message : state.newPostText, 
        likeCount : 0
      };
      
      state.postData.push(newPost);
      state.newPostText = '';
      return state;
    
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
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