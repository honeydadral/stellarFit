// src/view/home/index.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "../navigation"; // Import your navigation
import About from "../about"; // Assuming you want to show this as another page
import Chat from "../Chat"; // Assuming Chat component is also part of the routing
import Contact  from "../contact";
const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home page</p>
    </div>
  );
};

const HomePage = () => {
  return (
    <Router>
      <Navigation /> {/* Show the navigation bar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/chat" element={<Chat />} />
        <Route path='/contact' element={<Contact />} />
        {/* You can add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default HomePage; 