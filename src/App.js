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
import Passage from "./pages/Passage";
import Test from "./pages/Test";
import CreateCourse from "./pages/CreateCourse";
import CreateSubject from "./pages/CreateSubject";
import CreateStudent from "./pages/CreateStudent";
import CreateSubcourse from "./pages/CreateSubcourse";
import createTopic from "./pages/CreateTopic";
import CreateQuestion from "./pages/CreateQuestion";
import CreatePassage from "./pages/CreatePassage";
import News from "./pages/News";
import CreateNews from "./pages/CreateNews";
import CreateTest from "./pages/CreateTest";

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
        <Route path="/passage" exact component={Passage} />
        <Route path="/news" exact component={News} />
        <Route path="/test" exact component={Test} />
        <Route path="/add-course/:courseId" exact component={CreateCourse} />
        <Route path="/add-subcourse/:subcourseId" exact component={CreateSubcourse} />
        <Route path="/add-topic/:topicId" exact component={createTopic} />
        <Route path="/add-subject/:subjectId" exact component={CreateSubject} />
        <Route path="/add-student/:studentId" exact component={CreateStudent} />
        <Route path="/add-question/:questionId" exact component={CreateQuestion} />
        <Route path="/add-passage/:passageId" exact component={CreatePassage} />
        <Route path="/add-news/:newsId" exact component={CreateNews} />
        <Route path="/add-test/:testId" exact component={CreateTest} />












      </Switch>
    </BrowserRouter>
  );
};

export default App;
