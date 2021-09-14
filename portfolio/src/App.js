import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//Navbar
import Navbar from './components/Navbar'

// Pages
import Contact from "./pages/Contact";
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound';
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Services from "./pages/Services";

function App() {
    return (
      <Router>
        <Navbar/>
        <Switch>
          <Route path = '/' exact render={() => <Home/>}/>
          <Route path = '/contact' exact render={() => <Contact/>}/>
          <Route path = '/projects' exact render={() => <Projects/>} />
          <Route path = '/resume' exact render={() => <Resume/>}/>
          <Route path = '/services' exact render={() => <Services/>}/>
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    );
}

export default App;
