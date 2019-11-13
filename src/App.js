import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from './Components/About'
import './CSS/App.css';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';
import Resume from './Components/Resume';


function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/portfolio" component={Portfolio}/>
        <Route path="/resume" component={Resume}/>
      </div>
    </Router>
  );
}



export default App;
