import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './hooks/useAuth';
import Header from './components/layout/header';
import Main from './components/layout/main';
import Sidebar from './components/layout/sidebar';
import theme from './theme';
import './App.css';

function App() {

  const user = JSON.parse(localStorage.getItem('samba-user'));

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider user={user}>
        <div className="App">
          <Router>
            <Header />
            <div className='general-content'>
              <Sidebar />
              <Main />
            </div>
          </Router>
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
