// import React from 'react';
// It is not necessary anymore in the new
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
import Routes from './Routes';

function App() {
  return (
    <>
      <Routes />
      <ToastContainer />
    </>
      
  );
}

export default App;
