import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Navbar";

import { Route } from "react-router-dom";
import Home from "./front/Home";
import Articles from "./front/Articles";


function App() {
  return (
    <div className="container">
      <NavBar />
      <div>
        <Route path="/articles" component={Articles} />
        <Route path="/" exact component={Home} />
      </div>
    </div>
  );
}

export default App;
