import React, { Component } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DashboardFooter from "../components/DashboardFooter";
import QuestionService from "../services/QuestionService";
import SubjectService from "../services/SubjectService";
export default class Question extends Component{
    constructor(props) {
        super(props)

        this.state = {
            questions: [],
            subjects:[]
        }
        this.addQuestion = this.addQuestion.bind(this);
        this.editQuestion= this.editQuestion.bind(this);
        this.deleteQuestion = this.deleteQuestion.bind(this);
    }
    deleteQuestion(questionId){
        QuestionService.deleteQuestion(questionId).then( res => {
            this.setState({questions: this.state.questions.filter(question => question.questioneId !== questionId)});
        });
    }
    editQuestion(questionId){
        this.props.history.push(`/add-question/${questionId}`);
    }

componentDidMount(){
    QuestionService.getQuestions().then((res) => {
        this.setState({ questions: res.data});
    });
    SubjectService.getSubjects().then((res) => {
        this.setState({ subjects: res.data});
    });
}
addQuestion(){
    this.props.history.push('/add-question/_add');
}
render(){
  return (
    <div className="">
      <Navbar />
      <Sidebar />
        <div>
            <h2 className="text-center">Question List</h2>
            <div className = "row">
                    <button className="btn btn-primary" onClick={this.addQuestion}> +Add</button>
            </div>
            <div className="row table-responsive">
                <table className="table table-striped table-bordered align-middle">
                    <thead>
                        <tr>
                            <th>Question No.</th>
                            <th> Question</th>
                            <th>Subject</th>
                            <th> Question Type</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                       {
                           this.state.questions.map(
                               question =>
                               <tr key = {question.questionId}>
                                   <td>{ question.questionId }</td>
                                   <td>{ question.question} <br/>
                                      A. { question.option1} <br/>
                                      B. { question.option2} <br/>
                                      C. { question.option3} <br/>
                                      D. { question.option4} <br/>

                                   </td>
                                   <td>{question.subjectName}</td>
                                   <td>{question.questionType}</td>
                                   <td>
                                   <button onClick={ () => this.editQuestion(question.questionId)} className="btn btn-info">Update </button>
                                   <button style={{marginLeft: "10px"}} onClick={ () => this.deleteQuestion(question.questionId)} className="btn btn-danger">Delete </button>

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


