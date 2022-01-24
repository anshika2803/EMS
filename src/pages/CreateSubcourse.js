import React, { Component } from 'react'
import SubcourseService from '../services/SubcourseService';
import CourseService from '../services/CourseService';
import {Dropdown,DropdownToggle,DropdownMenu,DropdownItem} from 'reactstrap';


export default class CreateSubcourse extends Component {
    constructor(props) {
        super(props)

        this.state = {
            subcourseId: this.props.match.params.subcourseId,
            subcourseName: '',
            courseName: '',
            courses: ['', '', ''],
            dropdownOpen: false
            

        }
        this.toggle = this.toggle.bind(this);

        this.changeSubcourseNameHandler = this.changeSubcourseNameHandler.bind(this);
        this.changeCourseNameHandler = this.changeCourseNameHandler.bind(this);
        this.saveOrUpdateSubcourse = this.saveOrUpdateSubcourse.bind(this);
    }
    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }
    componentDidMount() {
        CourseService.getCourses().then((res) => {
            this.setState({ courses: res.data });
            //console.log(this.state.courses);
        });

        if (this.state.subcourseId === '_add') {
            return
        } else {
            SubcourseService.getSubcourseById(this.state.subcourseId).then((res) => {
                let subcourse = res.data;
                this.setState({
                    subcourseName: subcourse.subcourseName,
                    courseName: subcourse.courseName
                });
            });

        }
    }
    saveOrUpdateSubcourse = (e) => {
        e.preventDefault();
        let subcourse = { subcourseName: this.state.subcourseName, courseName: this.state.courseName };
        console.log('subcourse => ' + JSON.stringify(subcourse));


        if (this.state.subcourseId === '_add') {
            SubcourseService.createSubcourse(subcourse).then(res => {
                this.props.history.push('/subcourse');
            });
        } else {
            SubcourseService.updateSubcourse(subcourse, this.state.subcourseId).then(res => {
                this.props.history.push('/subcourse');
            });
        }
    }
    changeSubcourseNameHandler = (event) => {
        this.setState({ subcourseName: event.target.value });
    }
    changeCourseNameHandler = (event) => {
        this.setState({ courseName: event.target.value });
    }
    cancel() {
        this.props.history.push('/subcourse');
    }
    getTitle() {
        if (this.state.subcourseId === '_add') {
            return <h3 className="text-center">Add Sub-Course</h3>
        } else {
            return <h3 className="text-center">Update Sub-Course</h3>
        }
    }
    changeValue = (e) =>{
        this.setState({ courseName:    e.currentTarget.textContent})
        // changeCourseNameHandler(this.state.dropDownValue);
      }
    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> SubCourse Name: </label>
                                        <input placeholder="SubcourseName" name="SubcourseName" className="form-control"
                                            value={this.state.subcourseName} onChange={this.changeSubcourseNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Course Name: </label>
                                        <div class="input-group mb-3">
                                            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                                <DropdownToggle caret id="course-dropdown">
                                                     {this.state.courseName ? this.state.courseName  : <label>Course</label>}
                                                </DropdownToggle>
                                                {this.state.courses &&
                                                    <DropdownMenu>

                                                        {this.state.courses.map(course => (
                                                            <DropdownItem  onClick={this.changeValue}>{course.courseName}</DropdownItem>
                                                        ))}

                                                       
                                                    </DropdownMenu>}
                                            </Dropdown>
                                            
                                        </div>

                                    </div>


                                    <button className="btn btn-success" onClick={this.saveOrUpdateSubcourse}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        )
    }
}
