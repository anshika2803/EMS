import React, { Component } from 'react'
import StudentService from '../services/StudentService';

export default class createStudent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            studentId: this.props.match.params.studentId,
            studentName: '',
            studentEmail: '',
            studentMobile: '',
            regDate:''          

        }
        this.changeStudentNameHandler = this.changeStudentNameHandler.bind(this);
        this.changeStudentEmailHandler = this.changeStudentEmailHandler.bind(this);
        this.changeStudentMobileHandler = this.changeStudentMobileHandler.bind(this);
        this.changeRegDateHandler = this.changeRegDateHandler.bind(this);
        this.saveOrUpdateStudent = this.saveOrUpdateStudent.bind(this);
    }
    componentDidMount(){

        if(this.state.studentId === '_add'){
            return
        }else{
        StudentService.getStudentById(this.state.studentId).then((res) =>{
            let student = res.data;
            this.setState({studentName: student.studentName,
                studentEmail: student.studentEmail,
                studentMobile: student.studentMobile,
                regDate: student.regDate
            });
        });
    }
}
    saveOrUpdateStudent = (e) => {
        e.preventDefault();
        let student = {studentName: this.state.studentName,studentEmail: this.state.studentEmail,studentMobile: this.state.studentMobile, regDate: this.state.regDate};
        console.log('student => ' + JSON.stringify(student));

        
        if(this.state.studentId === '_add'){
            StudentService.createStudent(student).then(res =>{
                this.props.history.push('/student');
            });
        }else{
            StudentService.updateStudent(student, this.state.studentId).then( res => {
                this.props.history.push('/student');
            });
        }
    }
    changeStudentNameHandler= (event) => {
        this.setState({studentName: event.target.value});
    }
    changeStudentEmailHandler= (event) => {
        this.setState({studentEmail: event.target.value});
    }
    changeStudentMobileHandler= (event) => {
        this.setState({studentMobile: event.target.value});
    }
    changeRegDateHandler= (event) => {
        this.setState({regDate: event.target.value});
    }
    cancel(){
        this.props.history.push('/student');
    }
    getTitle(){
        if(this.state.studentId === '_add'){
            return <h3 className="text-center">Add Student</h3>
        }else{
            return <h3 className="text-center">Update Student</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Student Name: </label>
                                            <input placeholder="CourseName" name="StudentName" className="form-control" 
                                                value={this.state.studentName} onChange={this.changeStudentNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Email: </label>
                                            <input placeholder="Email" name="StudentEmail" className="form-control" 
                                                value={this.state.studentEmail} onChange={this.changeStudentEmailHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Mobile No.</label>
                                            <input placeholder="Mobile Number" name="StudentMobile" className="form-control" 
                                                value={this.state.studentMobile} onChange={this.changeStudentMobileHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label>Reg Date</label>
                                            <input placeholder="Reg Date" name="RegDate" className="form-control" 
                                                value={this.state.regDate} onChange={this.changeRegDateHandler}/>
                                        </div>
                                       

                                        <button className="btn btn-success" onClick={this.saveOrUpdateStudent}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
                
            </div>
        )
    }
}
