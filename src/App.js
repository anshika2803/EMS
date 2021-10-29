import React from "react";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
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
        <Route path="/students" exact component={Students} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
