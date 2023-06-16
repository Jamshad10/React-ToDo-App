import React from 'react';
import './App.css';
import Header from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Account from './pages/Account';
import { AuthContextProvider } from './context/AuthContext';
import Protected from './components/Protected';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Signup />} />
          <Route path='/account' element={<Protected> <Account /> </Protected>} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
