import React from "react";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import Student from "./pages/Student";
import StudentDashboard from "./pages/StudentDashboard";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Subject from "./pages/Subject";
import Topic from "./pages/Topic";
import "./App.css";
import Course from "./pages/Course";
import Subcourse from "./pages/Subcourse";
import Question from "./pages/Question";
import CreateCourse from "./pages/CreateCourse";
//import UpdateCourse from "./pages/UpdateCourse";
import CreateSubject from "./pages/CreateSubject";
import CreateStudent from "./pages/CreateStudent";
import CreateSubcourse from "./pages/CreateSubcourse";
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/StudentDashboard" exact component={StudentDashboard} />
        <Route path="/student" exact component={Student} />
        <Route path="/subject" exact component={Subject} />
        <Route path="/topic" exact component={Topic} />
        <Route path="/course" exact component={Course} />
        <Route path="/subcourse" exact component={Subcourse} />

        <Route path="/question" exact component={Question} />
        {/* <Route path="/passage" exact component={Passage} /> */}
        <Route path="/add-course/:courseId" exact component={CreateCourse} />
        <Route path="/add-subcourse/:subcourseId" exact component={CreateSubcourse} />

        <Route path="/add-subject/:subjectId" exact component={CreateSubject} />
        <Route path="/add-student/:studentId" exact component={CreateStudent} />



        {/* <Route path="/update-course/:courseId" exact component={UpdateCourse} /> */}





      </Switch>
    </BrowserRouter>
  );
};

export default App;
