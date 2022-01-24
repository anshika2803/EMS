import React, { Component } from 'react'
import QuestionService from '../services/QuestionService';
import SubjectService from '../services/SubjectService';
import {Dropdown,DropdownToggle,DropdownMenu,DropdownItem} from 'reactstrap';


export default class CreateQuestion extends Component {
    constructor(props) {
        super(props)

        this.state = {
            questionId: this.props.match.params.questionId,
            question: '',
            option1: '',
            option2: '',
            option3: '',
            option4: '',
            subjectName:'',
            questionType:'',
            subjects: ['', '', ''],
            dropdownOpen: false
}
        this.toggle = this.toggle.bind(this);

        this.changeQuestionHandler = this.changeQuestionHandler.bind(this);
        this.changeOption1Handler = this.changeOption1Handler.bind(this);
        this.changeOption2Handler = this.changeOption2Handler.bind(this);
        this.changeOption3Handler = this.changeOption3Handler.bind(this);
        this.changeOption4Handler = this.changeOption4Handler.bind(this);
        this.changeSubjectNameHandler=this.changeSubjectNameHandler.bind(this);
        this.changeQuestionTypeHandler=this.changeQuestionTypeHandler.bind(this);
        this.saveOrUpdateQuestion = this.saveOrUpdateQuestion.bind(this);
    }
    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }
    componentDidMount() {
        SubjectService.getSubjects().then((res) => {
            this.setState({ subjects: res.data });
        });

        if (this.state.questionId === '_add') {
            return
        } else {
            QuestionService.getQuestionById(this.state.questionId).then((res) => {
                let question = res.data;
                this.setState({
                    question: question.question,
                    option1: question.option1,
                    option2: question.option2,
                    option3: question.option3,
                    option4: question.option4,
                    subjectName: question.subjectName,
                    questionType:question.questionType
                });
            });

        }
    }
    saveOrUpdateQuestion = (e) => {
        e.preventDefault();
        let question = { question: this.state.question,option1: this.state.option1,option2: this.state.option2,option3: this.state.option3,option4: this.state.option4, subjectName: this.state.subjectName,questionType:this.state.questionType };
        console.log('question => ' + JSON.stringify(question));


        if (this.state.questionId === '_add') {
            QuestionService.createQuestion(question).then(res => {
                this.props.history.push('/question');
            });
        } else {
            QuestionService.updateQuestion(question, this.state.questionId).then(res => {
                this.props.history.push('/question');
            });
        }
    }
    changeQuestionHandler = (event) => {
        this.setState({ question: event.target.value });
    }
    changeOption1Handler = (event) => {
        this.setState({ option1: event.target.value });
    }
    changeOption2Handler = (event) => {
        this.setState({ option2: event.target.value });
    }
    changeOption3Handler = (event) => {
        this.setState({ option3: event.target.value });
    }
    changeOption4Handler = (event) => {
        this.setState({ option4: event.target.value });
    }
    changeSubjectNameHandler = (event) => {
        this.setState({ subjectName: event.target.value });
    }
    changeQuestionTypeHandler = (event) => {
        this.setState({ questionType: event.target.value });
    }
    cancel() {
        this.props.history.push('/question');
    }
    getTitle() {
        if (this.state.questionId === '_add') {
            return <h3 className="text-center">Add Question</h3>
        } else {
            return <h3 className="text-center">Update Question</h3>
        }
    }
    changeValue = (e) =>{
        this.setState({ subjectName:e.currentTarget.textContent})
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
                                        <label> Question </label>
                                        <input placeholder="Question" name="Question" className="form-control"
                                            value={this.state.question} onChange={this.changeQuestionHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Option1 </label>
                                        <input placeholder="Option1" name="Option1" className="form-control"
                                            value={this.state.option1} onChange={this.changeOption1Handler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Option2 </label>
                                        <input placeholder="Option2" name="Option2" className="form-control"
                                            value={this.state.option2} onChange={this.changeOption2Handler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Option3 </label>
                                        <input placeholder="Option3" name="Option3" className="form-control"
                                            value={this.state.option3} onChange={this.changeOption3Handler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Option4 </label>
                                        <input placeholder="Option4" name="Option4" className="form-control"
                                            value={this.state.option4} onChange={this.changeOption4Handler} />
                                    </div>

                                    <div className="form-group">
                                        <label> Subject Name: </label>
                                        <div class="input-group mb-3">
                                            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                                <DropdownToggle caret id="course-dropdown">
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
                                    {/* <div className="form-group">
                                        <label> Question Type: </label>
                                        <div class="input-group mb-3">
                                            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                                <DropdownToggle caret id="type-dropdown">
                                                     {this.state.questionType ? this.state.questionType  : <label>Subject</label>}
                                                </DropdownToggle>
                                                
                                                    <DropdownMenu>

                                                        
                                                            <DropdownItem  onClick={this.changeVal}>MCQ</DropdownItem>
                                                            <DropdownItem  onClick={this.changeVal}>Answer in brief</DropdownItem>
                                                            <DropdownItem  onClick={this.changeVal}>Answer in detail</DropdownItem>

                                                        

                                                       
                                                    </DropdownMenu>
                                            </Dropdown>
                                            
                                        </div>

                                    </div> */}
                                    <div className="form-group">
                                        <label> Question Type </label>
                                        <input placeholder="Question Type" name="Question Type" className="form-control"
                                            value={this.state.questionType} onChange={this.changeQuestionTypeHandler} />
                                    </div>


                                    <button className="btn btn-success" onClick={this.saveOrUpdateQuestion}>Save</button>
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
