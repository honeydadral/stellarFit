// src/App.js
import React from "react";
import Chat from "./view/Chat";
import { Route } from "react-router-dom";
import AppRoutes from  "./view/navigation/routes";
import HomePage  from "./view/home";
// import { Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <Chat /> */}
      <HomePage />
    </div>
    
  );
}

export default App;
