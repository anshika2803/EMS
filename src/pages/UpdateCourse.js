import React, { Component } from 'react'
import CourseService from '../services/CourseService';

class UpdateCourse extends Component {
    constructor(props) {
        super(props)

        this.state = {
            courseId: this.props.match.params.courseId,
            courseName: '',
            courseCode: ''          

        }
        this.changeCourseNameHandler = this.changeCourseNameHandler.bind(this);
        this.changeCourseCodeHandler = this.changeCourseCodeHandler.bind(this);
        this.updateCourse = this.updateCourse.bind(this);
    }

    componentDidMount(){
        CourseService.getCourseById(this.state.courseId).then((res) =>{
            let course = res.data;
            this.setState({courseName: course.courseName,
                courseCode: course.courseCode
            });
        });
    }
    updateCourse = (e) => {
        e.preventDefault();
        let course = {courseName: this.state.courseName, courseCode: this.state.courseCode};
        console.log('course => ' + JSON.stringify(course));
        console.log('courseId => ' + JSON.stringify(this.state.courseId));
        CourseService.updateCourse(course, this.state.courseId).then(res =>{
                this.props.history.push('/course');
        });
        
    }
    changeCourseNameHandler= (event) => {
        this.setState({courseName: event.target.value});
    }
    changeCourseCodeHandler= (event) => {
        this.setState({courseCode: event.target.value});
    }
    cancel(){
        this.props.history.push('/course');
    }
    
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Update Course</h3>

                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Course Name: </label>
                                            <input placeholder="CourseName" name="CourseName" className="form-control" 
                                                value={this.state.courseName} onChange={this.changeCourseNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Course Code: </label>
                                            <input placeholder="Course Code" name="courseCode" className="form-control" 
                                                value={this.state.courseCode} onChange={this.changeCourseCodeHandler}/>
                                        </div>
                                        

                                        <button className="btn btn-success" onClick={this.updateCourse}>Update</button>
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
export default UpdateCourse
