// import React from 'react';
import {addMessageActionCreater, updateNewMessageActionCreater} from '../../redux/diologPageReducer'
import Diologs from './Diologs';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
  return {
    diologPage : state.diologPage
  }
};

let mapStateToDispatch = (dispatch) => {
  return {
    addMessage : () => {
      dispatch(addMessageActionCreater());
    },
    updateNewMessage : (text) => {
      dispatch(updateNewMessageActionCreater(text));
    }
  }
};

const DiologsContainer = connect(mapStateToProps, mapStateToDispatch)(Diologs);

export default DiologsContainer;
