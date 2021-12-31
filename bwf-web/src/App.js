import React from 'react';
import Header from './components/header';
import Main from './components/main';
import Sidebar from './components/sidebar';
import './App.css';

function App() {

  return (
    <div className="App">
      <Header />
      <div className='general-content'>
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;
