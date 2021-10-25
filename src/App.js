import React from "react";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import StudentDashboard from "./pages/StudentDashboard";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/StudentDashboard" exact component={StudentDashboard} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
