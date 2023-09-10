import React from 'react';
import { Routes, BrowserRouter, Route, Navigate } from 'react-router-dom'
import Login from './pages/general/login/Login'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
