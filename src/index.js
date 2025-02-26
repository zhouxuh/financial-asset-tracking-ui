import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthProvider } from './context/AuthProvider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <AuthProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
