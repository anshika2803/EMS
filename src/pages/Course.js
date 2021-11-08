import React, { Component } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DashboardFooter from "../components/DashboardFooter";
import CourseService from "../services/CourseService";

export default class Course extends Component{
    constructor(props) {
        super(props)

        this.state = {
            courses: []
        }
    }

componentDidMount(){
    CourseService.getCourses().then((res) => {
        this.setState({ courses: res.data});
    });
}
render(){
  return (
    <div className="">
      <Navbar />
      <Sidebar />
        <div>
            <h2 className="text-center">Course List</h2>
            <div className="row table-responsive">
                <table className="table table-striped table-bordered align-middle">
                    <thead>
                        <tr>
                            <th>Course No.</th>
                            <th>Course Name</th>
                            <th> Code</th>
                        </tr>
                    </thead>

                    <tbody>
                       {
                           this.state.courses.map(
                               course =>
                               <tr key = {course.courseId}>
                                   <td>{ course.courseId }</td>
                                   <td>{ course.courseName}</td>
                                   <td>{ course.courseCode}</td>
                                   
                               </tr>
                           )
                       } 
                    </tbody>

                </table>
            </div>
             

        </div>                                                
      <DashboardFooter />
    </div>
  );
}
};


