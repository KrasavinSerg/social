import {createStore, combineReducers} from 'redux';
import profilePageReducer from './profilePageReducer';
import diologPageReducer from './diologPageReducer';
import sidedarReducer from './sidedarReducer';
import usersPageReducer from './usersPageReducer';
import authReducer from './authReducer';

let reducers = combineReducers({
  profilePage : profilePageReducer,
  diologPage : diologPageReducer,
  sidedar : sidedarReducer,
  usersPage : usersPageReducer,
  auth: authReducer
});

let store = createStore(reducers);

export default store;