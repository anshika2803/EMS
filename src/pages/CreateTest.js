import React, { Component } from 'react'
import TestService from '../services/TestService';
import CourseService from '../services/CourseService';
import {Dropdown,DropdownToggle,DropdownMenu,DropdownItem} from 'reactstrap';


export default class CreateTest extends Component {
    constructor(props) {
        super(props)

        this.state = {
            testId: this.props.match.params.testId,
            testName: '',
            courseName: '',
            openDate:'',
            closeDate:'',
            numOfQuestions:'',
            status:'',
            featured:'',
            courses: ['', '', ''],
            dropdownOpen: false,
            dropdownStatusOpen:false,
            dropdownFeaturedOpen:false
            

        }
        this.toggle = this.toggle.bind(this);
         this.toggleStatus = this.toggleStatus.bind(this);
          this.toggleFeatured = this.toggleFeatured.bind(this);

        this.changeTestNameHandler = this.changeTestNameHandler.bind(this);
        this.changeCourseNameHandler = this.changeCourseNameHandler.bind(this);
        this.changeCourseNameHandler = this.changeCourseNameHandler.bind(this);
        this.changeOpenDateHandler = this.changeOpenDateHandler.bind(this);
        this.changeCloseDateHandler = this.changeCloseDateHandler.bind(this);
        this.changeStatusHandler = this.changeStatusHandler.bind(this);
        this.changeFeaturedHandler = this.changeFeaturedHandler.bind(this);

        this.saveOrUpdateTest = this.saveOrUpdateTest.bind(this);
    }
    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }
     toggleStatus() {
        this.setState(prevState => ({
            dropdownStatusOpen: !prevState.dropdownStatusOpen
        }));
    }
     toggleFeatured() {
        this.setState(prevState => ({
            dropdownFeaturedOpen: !prevState.dropdownFeaturedOpen
        }));
    }
    componentDidMount() {
        CourseService.getCourses().then((res) => {
            this.setState({ courses: res.data });
        });

        if (this.state.subcourseId === '_add') {
            return
        } else {
            TestService.getTestById(this.state.testId).then((res) => {
                let test = res.data;
                this.setState({
                    testName: test.testName,
                    courseName: test.courseName,
                    openDate:test.openDate,
                    closeDate:test.closeDate,
                    numOfQuestions:test.numOfQuestions,
                    status:test.status,
                    featured:test.featured
                });
            });

        }
    }
    saveOrUpdateTest = (e) => {
        e.preventDefault();
        let test = { testName: this.state.testName, courseName: this.state.courseName,openDate:this.state.openDate,closeDate:this.state.closeDate,numOfQuestions:this.state.numOfQuestions,status:this.state.status,featured:this.state.featured };
        console.log('test => ' + JSON.stringify(test));


        if (this.state.testId === '_add') {
            TestService.createTest(test).then(res => {
                this.props.history.push('/test');
            });
        } else {
            TestService.updateTest(test, this.state.testId).then(res => {
                this.props.history.push('/test');
            });
        }
    }
    changeTestNameHandler = (event) => {
        this.setState({ testName: event.target.value });
    }
    changeCourseNameHandler = (event) => {
        this.setState({ courseName: event.target.value });
    }
    changeOpenDateHandler = (event) => {
        this.setState({ openDate: event.target.value });
    }
    changeCloseDateHandler = (event) => {
        this.setState({ closeDate: event.target.value });
    }
    changeNumOfQuestionsHandler = (event) => {
        this.setState({ numOfQuestions: event.target.value });
    }
    changeStatusHandler = (event) => {
        this.setState({ status: event.target.value });
    }
    changeFeaturedHandler = (event) => {
        this.setState({ featured: event.target.value });
    }
    cancel() {
        this.props.history.push('/test');
    }
    getTitle() {
        if (this.state.testId === '_add') {
            return <h3 className="text-center">Add Test</h3>
        } else {
            return <h3 className="text-center">Update Test</h3>
        }
    }
    changeValue = (e) =>{
        this.setState({ courseName:    e.currentTarget.textContent})

      }
      changeStatusValue = (e) =>{
        this.setState({ status:    e.currentTarget.textContent})

      }
      changeFeaturedValue = (e) =>{
        this.setState({ featured:    e.currentTarget.textContent})
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
                                        <label> Test Name: </label>
                                        <input placeholder="TestName" name="TestName" className="form-control"
                                            value={this.state.testName} onChange={this.changeTestNameHandler} />
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
                                    <div className="form-group">
                                        <label> Open Date: </label>
                                        <input placeholder="OpenDate" name="OpenDate" className="form-control"
                                            value={this.state.openDate} onChange={this.changeOpenDateHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Close Date: </label>
                                        <input placeholder="CloseDate" name="CloseDate" className="form-control"
                                            value={this.state.closeDate} onChange={this.changeCloseDateHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Number Of Questions: </label>
                                        <input placeholder="Number Of Questions" name="numOfQuestions" className="form-control"
                                            value={this.state.numOfQuestions} onChange={this.changeNumOfQuestionsHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Status: </label>
                                        <div class="input-group mb-3">
                                            <Dropdown isOpen={this.state.dropdownStatusOpen} toggle={this.toggleStatus}>
                                                <DropdownToggle caret id="status-dropdown">
                                                     {this.state.status ? this.state.status  : <label>Status</label>}
                                                </DropdownToggle>
                                                    <DropdownMenu>

                                                       
                                                            <DropdownItem  onClick={this.changeStatusValue}>Active</DropdownItem>
                                                            <DropdownItem  onClick={this.changeStatusValue}>Disable</DropdownItem>

                                                       

                                                       
                                                    </DropdownMenu>
                                            </Dropdown>
                                            
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label> Featured: </label>
                                        <div class="input-group mb-3">
                                            <Dropdown isOpen={this.state.dropdownFeaturedOpen} toggle={this.toggleFeatured}>
                                                <DropdownToggle caret id="featured-dropdown">
                                                     {this.state.featured ? this.state.featured  : <label>Featured</label>}
                                                </DropdownToggle>
                                                    <DropdownMenu>

                                                       
                                                            <DropdownItem  onClick={this.changeFeaturedValue}>Featured</DropdownItem>
                                                            <DropdownItem  onClick={this.changeFeaturedValue}>Disabled</DropdownItem>

                                                       

                                                       
                                                    </DropdownMenu>
                                            </Dropdown>
                                            
                                        </div>
                                    </div>




                                    <button className="btn btn-success" onClick={this.saveOrUpdateTest}>Save</button>
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
