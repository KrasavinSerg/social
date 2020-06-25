import {createStore, combineReducers} from 'redux';
import profilePageReducer from './profilePageReducer';
import diologPageReducer from './diologPageReducer';
import sidedarReducer from './sidedarReducer';
import usersPageReducer from './usersPageReducer';

let reducers = combineReducers({
  profilePage : profilePageReducer,
  diologPage : diologPageReducer,
  sidedar : sidedarReducer,
  usersPage : usersPageReducer
});

let store = createStore(reducers);

export default store;