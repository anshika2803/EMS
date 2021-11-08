import React, { Component } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DashboardFooter from "../components/DashboardFooter";
import QuestionService from "../services/QuestionService";
export default class Question extends Component{
    constructor(props) {
        super(props)

        this.state = {
            questions: []
        }
    }

componentDidMount(){
    QuestionService.getQuestions().then((res) => {
        this.setState({ questions: res.data});
    });
}
render(){
  return (
    <div className="">
      <Navbar />
      <Sidebar />
        <div>
            <h2 className="text-center">Question List</h2>
            <div className="row table-responsive">
                <table className="table table-striped table-bordered align-middle">
                    <thead>
                        <tr>
                            <th>Question No.</th>
                            <th> Question</th>
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


