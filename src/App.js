import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, Geo, Photo, Login } from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/geo" exact component={() => <Geo />} />
          <Route path="/photo" exact component={() => <Photo />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
