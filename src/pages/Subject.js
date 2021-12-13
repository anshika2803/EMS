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
        this.addSubject = this.addSubject.bind(this);
        this.editSubject= this.editSubject.bind(this);
        this.deleteSubject = this.deleteSubject.bind(this);
    }
    deleteSubject(subjectId){
        SubjectService.deleteSubject(subjectId).then( res => {
            this.setState({subjects: this.state.subjects.filter(subject => subject.subjectId !== subjectId)});
        });
    }
    editSubject(subjectId){
        this.props.history.push(`/add-subject/${subjectId}`);
    }

componentDidMount(){
    SubjectService.getSubjects().then((res) => {
        this.setState({ subjects: res.data});
    });
}
addSubject(){
    this.props.history.push('/add-subject/_add');
}
render(){
  return (
    <div className="">
      <Navbar />
      <Sidebar />
        <div>
            <h2 className="text-center">Subject List</h2>
            <div className = "row">
                    <button className="btn btn-primary" onClick={this.addSubject}> +Add</button>
            </div>
            <div className="row table-responsive">
                <table className="table table-striped table-bordered align-middle">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Subject Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                       {
                           this.state.subjects.map(
                               subject =>
                               <tr key = {subject.subjectId}>
                                   <td>{ subject.subjectId }</td>
                                   <td>{ subject.subjectName}</td>
                                   <td>
                                   <button onClick={ () => this.editSubject(subject.subjectId)} className="btn btn-info">Update </button>
                                   <button style={{marginLeft: "10px"}} onClick={ () => this.deleteSubject(subject.subjectId)} className="btn btn-danger">Delete </button>

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


