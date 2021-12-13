import React, { Component } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DashboardFooter from "../components/DashboardFooter";
import SubcourseService from "../services/SubcourseService";
import CourseService from "../services/CourseService";

export default class Subcourse extends Component{
    constructor(props) {
        super(props)

        this.state = {
            subcourses: [],
            courses:[]
        }
        this.addSubcourse = this.addSubcourse.bind(this);
        this.editSubcourse= this.editSubcourse.bind(this);
        this.deleteSubcourse = this.deleteSubcourse.bind(this);
       // this.searchTerm = this.searchTerm.bind(this);
    }
    deleteSubcourse(subcourseId){
        SubcourseService.deleteCourse(subcourseId).then( res => {
            this.setState({subcourses: this.state.subcourses.filter(subcourse => subcourse.subcourseId !== subcourseId)});
        });
    }
    editSubcourse(subcourseId){
        this.props.history.push(`/add-subcourse/${subcourseId}`);
    }


componentDidMount(){
    SubcourseService.getSubcourses().then((res) => {
        this.setState({ subcourses: res.data});
    });
    CourseService.getCourses().then((res) => {
        this.setState({ courses: res.data});
        console.log(this.state.courses);
    });

}
addSubcourse(){
    this.props.history.push('/add-subcourse/_add');
}
render(){
  return (
    <div className="">
      <Navbar />
      <Sidebar />
        <div>
            <h2 className="text-center">SubCourse List</h2>
            <div className = "row">
                    <button className="btn btn-primary" onClick={this.addSubcourse}> +Add</button>
            </div>
            <div className="row">
                <input type= "text" placeholder="Search here...."/>
                {
                    this.state.courses.map((val,key) => {
                        return
                    })
                }

            </div>
            <div className="row table-responsive">
                <table className="table table-striped table-bordered align-middle">
                    <thead>
                        <tr>
                            <th>SubCourse No.</th>
                            <th>SubCourse Name</th>
                            <th>Course</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                       {
                           this.state.subcourses.map(
                               subcourse =>
                               <tr key = {subcourse.subcourseId}>
                                   <td>{ subcourse.subcourseId }</td>
                                   <td>{ subcourse.subcourseName}</td>
                                   <td>{ subcourse.courseName}</td> 
                                   <td>
                                   <button onClick={ () => this.editSubcourse(subcourse.subcourseId)} className="btn btn-info">Update </button>
                                   <button style={{marginLeft: "10px"}} onClick={ () => this.deleteSubcourse(subcourse.subcourseId)} className="btn btn-danger">Delete </button>

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