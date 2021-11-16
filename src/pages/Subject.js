import React, { Component } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DashboardFooter from "../components/DashboardFooter";
import SubjectService from "../services/SubjectService";

export default class Subject extends Component{
    constructor(props) {
        super(props)

        this.state = {
            subjects: []
        }
    }

componentDidMount(){
    SubjectService.getSubjects().then((res) => {
        this.setState({ subjects: res.data});
    });
}
render(){
  return (
    <div className="">
      <Navbar />
      <Sidebar />
        <div>
            <h2 className="text-center">Subject List</h2>
            <div className="row table-responsive">
                <table className="table table-striped table-bordered align-middle">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Subject Name</th>
                        </tr>
                    </thead>

                    <tbody>
                       {
                           this.state.subjects.map(
                               subject =>
                               <tr key = {subject.subjectId}>
                                   <td>{ subject.subjectId }</td>
                                   <td>{ subject.subjectName}</td>
                                   
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

