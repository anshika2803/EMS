import React, { Component } from 'react'
import CourseService from '../services/CourseService';

export default class CreateCourse extends Component {
    constructor(props) {
        super(props)

        this.state = {
            courseId: this.props.match.params.courseId,
            courseName: '',
            courseCode: ''          

        }
        this.changeCourseNameHandler = this.changeCourseNameHandler.bind(this);
        this.changeCourseCodeHandler = this.changeCourseCodeHandler.bind(this);
        this.saveOrUpdateCourse = this.saveOrUpdateCourse.bind(this);
    }
    componentDidMount(){

        if(this.state.courseId === '_add'){
            return
        }else{
        CourseService.getCourseById(this.state.courseId).then((res) =>{
            let course = res.data;
            this.setState({courseName: course.courseName,
                courseCode: course.courseCode
            });
        });
    }
}
    saveOrUpdateCourse = (e) => {
        e.preventDefault();
        let course = {courseName: this.state.courseName, courseCode: this.state.courseCode};
        console.log('course => ' + JSON.stringify(course));

        
        if(this.state.courseId === '_add'){
            CourseService.createCourse(course).then(res =>{
                this.props.history.push('/course');
            });
        }else{
            CourseService.updateCourse(course, this.state.courseId).then( res => {
                this.props.history.push('/course');
            });
        }
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
    getTitle(){
        if(this.state.courseId === '_add'){
            return <h3 className="text-center">Add Course</h3>
        }else{
            return <h3 className="text-center">Update Course</h3>
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
                                            <label> Course Name: </label>
                                            <input placeholder="CourseName" name="CourseName" className="form-control" 
                                                value={this.state.courseName} onChange={this.changeCourseNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Course Code: </label>
                                            <input placeholder="Course Code" name="courseCode" className="form-control" 
                                                value={this.state.courseCode} onChange={this.changeCourseCodeHandler}/>
                                        </div>
                                        

                                        <button className="btn btn-success" onClick={this.saveOrUpdateCourse}>Save</button>
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
