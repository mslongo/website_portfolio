import './App.css';
import React from 'react';
import Navbar from "./components/Navbar/Navbar"
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'
import Navigation from './components/Navigation'

function App() {
  return (
    
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/home" component={Home} exact/>
            <Route path="/projects" component={Projects} exact/>
            <Route path="/about" component={About} exact/>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
