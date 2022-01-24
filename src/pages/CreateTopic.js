import React, { Component } from 'react'
import TopicService from '../services/TopicService';
import SubjectService from '../services/SubjectService';
import {Dropdown,DropdownToggle,DropdownMenu,DropdownItem} from 'reactstrap';


export default class createTopic extends Component {
    constructor(props) {
        super(props)

        this.state = {
            topicId: this.props.match.params.topicId,
            topicName: '',
            subjectName: '',
            subjects: ['', '', ''],
            dropdownOpen: false
            

        }
        this.toggle = this.toggle.bind(this);

        this.changeTopicNameHandler = this.changeTopicNameHandler.bind(this);
        this.changeSubjectNameHandler = this.changeSubjectNameHandler.bind(this);
        this.saveOrUpdateTopic = this.saveOrUpdateTopic.bind(this);
    }
    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }
    componentDidMount() {
        SubjectService.getSubjects().then((res) => {
            this.setState({ subjects: res.data });
            //console.log(this.state.courses);
        });

        if (this.state.topicId === '_add') {
            return
        } else {
            TopicService.getTopicById(this.state.topicId).then((res) => {
                let topic = res.data;
                this.setState({
                    topicName: topic.topicName,
                    subjectName: topic.subjectName
                });
            });

        }
    }
    saveOrUpdateTopic = (e) => {
        e.preventDefault();
        let topic = { topicName: this.state.topicName, subjectName: this.state.subjectName };
        console.log('topic => ' + JSON.stringify(topic));


        if (this.state.topicId === '_add') {
            TopicService.createTopic(topic).then(res => {
                this.props.history.push('/topic');
            });
        } else {
            TopicService.updateTopic(topic, this.state.topicId).then(res => {
                this.props.history.push('/topic');
            });
        }
    }
    changeTopicNameHandler = (event) => {
        this.setState({ topicName: event.target.value });
    }
    changeSubjectNameHandler = (event) => {
        this.setState({ subjectName: event.target.value });
    }
    cancel() {
        this.props.history.push('/topic');
    }
    getTitle() {
        if (this.state.topicId === '_add') {
            return <h3 className="text-center">Add Topic</h3>
        } else {
            return <h3 className="text-center">Update Topic</h3>
        }
    }
    changeValue = (e) =>{
        this.setState({ subjectName: e.currentTarget.textContent})
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
                                        <label> Topic Name: </label>
                                        <input placeholder="Topic Name" name="TopicName" className="form-control"
                                            value={this.state.topicName} onChange={this.changeTopicNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Subject Name: </label>
                                        <div class="input-group mb-3">
                                            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                                <DropdownToggle caret id="subject-dropdown">
                                                     {this.state.subjectName ? this.state.subjectName  : <label>Subject</label>}
                                                </DropdownToggle>
                                                {this.state.subjects &&
                                                    <DropdownMenu>

                                                        {this.state.subjects.map(subject => (
                                                            <DropdownItem  onClick={this.changeValue}>{subject.subjectName}</DropdownItem>
                                                        ))}

                                                       
                                                    </DropdownMenu>}
                                            </Dropdown>
                                            
                                        </div>

                                    </div>


                                    <button className="btn btn-success" onClick={this.saveOrUpdateTopic}>Save</button>
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
