import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Navbar";

import { Route } from "react-router-dom";
import Home from "./front/Home";
import Articles from "./front/Articles";
import Contact from "./front/Contact";
import Post from "./front/Post";


function App() {
  return (
    <div className="container">
      <NavBar />
      <div>
        <Route path="/articles/:id" component={Post} />
        <Route path="/articles" exact component={Articles} />
        <Route path="/contact" component={Contact} />
        <Route path="/" exact component={Home} />
      </div>
    </div>
  );
}

export default App;
