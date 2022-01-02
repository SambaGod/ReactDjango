import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header';
import Main from './components/main';
import Sidebar from './components/sidebar';
import theme from './theme';
import './App.css';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <Header />
          <div className='general-content'>
            <Sidebar />
            <Main />
          </div>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
