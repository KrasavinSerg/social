import React from 'react';
import {addPostActionCreater, updateNewPostTextActionCreater} from '../../../redux/profilePageReducer';
import MyPosts from './MyPosts';


const MyPostsContainer = (props) => {

  let state = props.store.getState();

  let onAddPost = () => {
    props.store.dispatch(addPostActionCreater());
  } 
  
  let onPostChange = (text) => {
    props.store.dispatch(updateNewPostTextActionCreater(text));
  };

  return <MyPosts addPost={onAddPost} updateNewPostText={onPostChange} 
  postData={state.profilePage.postData} 
  newPostText={state.profilePage.newPostText}/>
}

export default MyPostsContainer;