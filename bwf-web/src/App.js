import React from 'react';
import Header from './components/header';
import Main from './components/main';
import Sidebar from './components/sidebar';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';
import './App.css';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <div className='general-content'>
          <Sidebar />
          <Main />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
