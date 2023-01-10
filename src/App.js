import React, { useState } from 'react';
import './App.css';
import Login from './user_components/Login';
import Register from './user_components/Register';
import Main from './user_components/Main';
import { Routes, Route, useLocation } from 'react-router-dom';

function App() {
  /*  const [user, setLoginUser] = useState({})
    const location = useLocation();
  return (
  <>
   <Routes location={location} key={location.pathname}>
      <Route exact path="/"  element={user && user._id ? <Main />: <Login setLoginUser={setLoginUser}/> }/>
      <Route exact path="/login" element={ <Login setLoginUser={setLoginUser}/>}/>
      <Route exact path="/register" element={ <Register />}/>
    </Routes> 
    </>*/
    return (
      <Login />
  );
}

export default App;