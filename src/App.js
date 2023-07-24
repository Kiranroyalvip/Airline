
// App.js
import React from "react";
import StaffDashboard from "./Components/StaffDashboard";
import AdminDashboard from "./Components/AdminDashboard";
//import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { BrowserRouter as Router , Route, Switch, Link } from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/staff">Staff Dashboard</Link>
            </li>
            <li>
              <Link to="/admin">Admin Dashboard</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/staff" component={StaffDashboard} />
          <Route path="/admin" component={AdminDashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
