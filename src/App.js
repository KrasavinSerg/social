import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from 'react-router-dom';
import DiologsContainer from './components/Diologs/DiologsContainer';
import UsersContainer from './components/Users/UsersContainer';


function App() {
  return (
    <BrowserRouter>
      <div className='app-container'>
        <div className='app-wrapper'>
          <Header />
          <Sidebar />
          <div className='app-wrapper-content'>
            <Route path='/Diologs' render={() => <DiologsContainer />} />
            <Route path='/Profile' render={() => <Profile />} />
            <Route path='/Users' render={() => <UsersContainer />} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
