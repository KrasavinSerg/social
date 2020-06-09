import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route} from 'react-router-dom';
import DiologsContainer from './components/Diologs/DiologsContainer';


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
