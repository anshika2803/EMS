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
        this.addCourse = this.addCourse.bind(this);
        this.editCourse= this.editCourse.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
    }
    deleteCourse(courseId){
        CourseService.deleteCourse(courseId).then( res => {
            this.setState({courses: this.state.courses.filter(course => course.courseId !== courseId)});
        });
    }
    editCourse(courseId){
        this.props.history.push(`/add-course/${courseId}`);
    }


componentDidMount(){
    CourseService.getCourses().then((res) => {
        this.setState({ courses: res.data});
    });
}
addCourse(){
    this.props.history.push('/add-course/_add');
}
render(){
  return (
    <div className="">
      <Navbar />
      <Sidebar />
        <div>
            <h2 className="text-center">Course List</h2>
            <div className = "row">
                    <button className="btn btn-primary" onClick={this.addCourse}> +Add</button>
            </div>
            <div className="row table-responsive">
                <table className="table table-striped table-bordered align-middle">
                    <thead>
                        <tr>
                            <th>Course No.</th>
                            <th>Course Name</th>
                            <th>Course Code</th>
                            <th>Actions</th>
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
                                   <td>
                                   <button onClick={ () => this.editCourse(course.courseId)} className="btn btn-info">Update </button>
                                   <button style={{marginLeft: "10px"}} onClick={ () => this.deleteCourse(course.courseId)} className="btn btn-danger">Delete </button>

                                   </td>

                                   
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