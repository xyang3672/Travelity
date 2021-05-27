import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from './components/pages/Home';
import Map from './components/pages/Map';
import Discover from './components/pages/Discover';
import Login from './components/pages/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/map" exact component={() => <Map />} />
          <Route path="/discover" exact component={() => <Discover />} />
          <Route path="/login" exact component={() => <Login />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
