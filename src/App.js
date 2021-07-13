import './App.css';
import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import About from "./pages/About";
import Projects from "./pages/Projects";
import Header from './components/Header';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <div className="App">
      <header className="App-header">
        <Header />
        <Switch>
          <div>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={About}/>
          <Route exact path={`${process.env.PUBLIC_URL}/aboutme`}  component={About}/>
          <Route exact path={`${process.env.PUBLIC_URL}/myprojects`}  component={Projects}/>
          {/* <Route component={NotFound} status={404}/> */}
          </div>
        </Switch>      
        
        <Footer />

      </header>
    </div>
    </Router>
  );
}

export default App;
