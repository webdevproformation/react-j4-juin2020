import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Navbar";

import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./front/Home";
import Articles from "./front/Articles";
import Contact from "./front/Contact";
import Post from "./front/Post";
import NotFound from './front/notFound';
import Blog from "./front/Blog";


function App() {
  return (
    <div className="container">
      <NavBar />
      <div>
        <Switch>
          <Route path="/articles/:id" component={Post} />
          <Route path="/articles" exact component={Articles} />
          <Route path="/contact" component={Contact} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/blog" component={Blog} />
          <Route path="/" exact component={Home} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
