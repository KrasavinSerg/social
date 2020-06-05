import {createStore, combineReducers} from 'redux';
import profilePageReducer from './profilePageReducer';
import diologPageReducer from './diologPageReducer';
import sidedarReducer from './sidedarReducer';

let reducers = combineReducers({
  profilePage : profilePageReducer,
  diologPage : diologPageReducer,
  sidedar : sidedarReducer
});

let store = createStore(reducers);

export default store;