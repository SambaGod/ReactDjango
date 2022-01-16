import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './hooks/useAuth';
import Header from './components/header';
import Main from './components/main';
import Sidebar from './components/sidebar';
import theme from './theme';
import './App.css';

function App() {

  const user = 'randomUser';

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
