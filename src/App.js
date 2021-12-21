import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Portfolio/Projects";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
      </div>
      <div>
        <Router>
          <Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/portfolio" component={Projects} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
        </Router>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
