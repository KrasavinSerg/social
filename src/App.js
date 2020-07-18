import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import {BrowserRouter, Route} from 'react-router-dom';
import DiologsContainer from './components/Diologs/DiologsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';


function App() {
  return (
    <BrowserRouter>
      <div className='app-container'>
        <div className='app-wrapper'>
          <HeaderContainer />
          <Sidebar />
          <div className='app-wrapper-content'>
            <Route path='/diologs' render={() => <DiologsContainer />} />
            <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
            <Route path='/users' render={() => <UsersContainer />} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
