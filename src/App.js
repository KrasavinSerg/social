import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import Diologs from './components/Diologs/Diologs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route} from 'react-router-dom';


function App(props) {
  return (
    <BrowserRouter>
      <div className='app-container'>
        <div className='app-wrapper'>
          <Header />
          <Sidebar state={props.state.sidedar} />
          <div className='app-wrapper-content'>
            <Route path='/Diologs' render={() => <Diologs 
              diologPage={props.state.diologPage} 
              dispatch={props.dispatch}
            />} />
            <Route path='/Profile' render={() => <Profile 
              profilePage={props.state.profilePage} 
              dispatch={props.dispatch}
            />} />
            <Route path='/News' component={News} />
            <Route path='/Music' component={Music} />
            <Route path='/Settings' component={Settings} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
