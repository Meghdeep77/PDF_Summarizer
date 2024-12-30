import React from "react";
import Home from "./Home";
import NewPage from "./NewPage";
import Login_Page from "./Login_Page";
import Dash from "./Dash";
import PrivateRoute from "./PrivateRoute";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        {/* Define the route and render Home for the root path */}
        <Route path="/" component={Home} exact />
        <Route path="/about" component={NewPage} /> {/* About route */}
        <Route path="/login" component={Login_Page} /> {/* About route */}
        <PrivateRoute path="/dashboard" component={Dash} />
      </Switch>
    </Router>
  );
}

export default App;
