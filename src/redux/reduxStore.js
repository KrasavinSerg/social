import {createStore, combineReducers, applyMiddleware} from 'redux';
import profilePageReducer from './profilePageReducer';
import diologPageReducer from './diologPageReducer';
import sidedarReducer from './sidedarReducer';
import usersPageReducer from './usersPageReducer';
import authReducer from './authReducer';
import thunkMiddlewere from 'redux-thunk';

let reducers = combineReducers({
  profilePage : profilePageReducer,
  diologPage : diologPageReducer,
  sidedar : sidedarReducer,
  usersPage : usersPageReducer,
  auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddlewere));

export default store;