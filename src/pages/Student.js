import React, { Component } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DashboardFooter from "../components/DashboardFooter";
import StudentService from "../services/StudentService";

export default class Student extends Component{
    constructor(props) {
        super(props)

        this.state = {
            students: []
        }
        this.addStudent = this.addStudent.bind(this);
        this.editStudent= this.editStudent.bind(this);
        this.deleteStudent = this.deleteStudent.bind(this);
    }
    deleteStudent(studentId){
        StudentService.deleteStudent(studentId).then( res => {
            this.setState({students: this.state.students.filter(student => student.studentId !==studentId)});
        });
    }
    editStudent(studentId){
        this.props.history.push(`/add-student/${studentId}`);
    }


componentDidMount(){
    StudentService.getStudents().then((res) => {
        this.setState({ students: res.data});
    });
}
addStudent(){
    this.props.history.push('/add-student/_add');
}
render(){
  return (
    <div className="">
      <Navbar />
      <Sidebar />
        <div>
            <h2 className="text-center">Student List</h2>
            <div className = "row">
                    <button className="btn btn-primary" onClick={this.addStudent}> +Add</button>
            </div>
            <div className="row">
                {/* <input type= "text" placeholder="Search here...."/>
                {
                    this.state.students.map((val,key) => {
                        return
                    })
                } */}

            </div>
            <div className="row table-responsive">
                <table className="table table-striped table-bordered align-middle">
                    <thead>
                        <tr>
                            <th>Student No.</th>
                            <th>Student Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Reg Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                       {
                           this.state.students.map(
                               student =>
                               <tr key = {student.studentId}>
                                   <td>{ student.studentId }</td>
                                   <td>{ student.studentName}</td>
                                   <td>{ student.studentEmail}</td>
                                   <td>{ student.studentMobile}</td>
                                   <td>{ student.regDate}</td>
                                   <td>
                                   <button onClick={ () => this.editStudent(student.studentId)} className="btn btn-info">Update </button>
                                   <button style={{marginLeft: "10px"}} onClick={ () => this.deleteStudent(student.studentId)} className="btn btn-danger">Delete </button>

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