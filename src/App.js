import React, { useState } from "react";
import './App.css';
import logo from './logo.svg';
import Login from './user_components.js/Login';
import { Login2 } from "./diet_expert.js/Login";
import { Register2 } from "./diet_expert.js/Register";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <div className="App">
      {
        currentForm === "login" ? <Login2 onFormSwitch={toggleForm} /> : <Register2 onFormSwitch={toggleForm} />
      }
    </div>
  );
}

export default App;