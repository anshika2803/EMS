import React, { Component } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DashboardFooter from "../components/DashboardFooter";
import TestService from "../services/TestService";
import CourseService from "../services/CourseService";
import axios from 'axios';
import ReactPaginate from 'react-paginate';

export default class Test extends Component{
    constructor(props) {
        super(props)

        this.state = {
            tests: [],
            courses:[]
        }
        this.addTest= this.addTest.bind(this);
        this.editTest= this.editTest.bind(this);
        this.deleteTest = this.deleteTest.bind(this);
       // this.searchTerm = this.searchTerm.bind(this);
    }
    deleteTest(testId){
        TestService.deleteTest(testId).then( res => {
            this.setState({tests: this.state.tests.filter(test => test.testId !== testId)});
        });
    }
    editTest(testId){
        this.props.history.push(`/add-test/${testId}`);
    }


componentDidMount(){
    TestService.getTests().then((res) => {
        this.setState({ tests: res.data});
    });
    CourseService.getCourses().then((res) => {
        this.setState({ courses: res.data});
        //console.log(this.state.courses);
    });

}
addTest(){
    this.props.history.push('/add-test/_add');
}
render(){
  return (
    <div className="">
      <Navbar />
      <Sidebar />
        <div>
            <h2 className="text-center">Test List</h2>
            <div className = "row">
                    <button className="btn btn-primary" onClick={this.addTest}> +Add</button>
            </div>
            <div className="row">
                <input type= "text" placeholder="Search here...."/>
                {/* {
                    this.state.courses.map((val,key) => {
                        return
                    })
                } */}

            </div>
            <div className="row table-responsive">
                <table className="table table-striped table-bordered align-middle">
                    <thead>
                        <tr>
                            <th>Test No.</th>
                            <th>Test Name</th>
                            <th>Course</th>
                            <th>Open Date</th>
                            <th>Close Date</th>
                            <th>No. Of Questions</th>
                            <th>Status</th>
                            <th>Featured</th>

                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                       {
                           this.state.tests.map(
                               test =>
                               <tr key = {test.testId}>
                                   <td>{ test.testId }</td>
                                   <td>{ test.testName}</td>
                                   <td>{ test.courseName}</td>
                                    <td>{ test.openDate}</td>
                                    <td>{ test.closeDate}</td>
                                    <td>{ test.numOfQuestions}</td>
                                    <td>{ test.status}</td>
                                    <td>{ test.featured}</td>
                                   <td>
                                   <button onClick={ () => this.editTest(test.testId)} className="btn btn-info">Update </button>
                                   <button style={{marginLeft: "10px"}} onClick={ () => this.deleteTest(test.testId)} className="btn btn-danger">Delete </button>

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