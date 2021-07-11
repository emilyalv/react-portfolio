import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Header />
        <Switch>
          <Route exact path="/aboutme" component={About}/>
          <Route exact path="/myprojects" component={Projects}/>
        </Switch>        
        
        <Footer />

      </header>
    </div>
    </Router>
  );
}

export default App;
