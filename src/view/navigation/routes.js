// src/navigation/routes.js
import React from 'react';
import { Routes , Route } from "react-router-dom"; // for React Router v5
import Home from '../home';
import About from '../about'; // Create these components similarly in their own folders
import Contact from '../contact';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="../home" element={<Home />} />
      <Route path="../about" element={<About />} />
      <Route path='../contact' element={<Contact />} />
    </Routes>
  );
};

export default AppRoutes;
