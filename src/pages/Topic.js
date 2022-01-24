import React, { Component } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DashboardFooter from "../components/DashboardFooter";
import TopicService from "../services/TopicService";
import SubjectService from "../services/SubjectService";

export default class Topic extends Component{
    constructor(props) {
        super(props)

        this.state = {
            topics: [],
            subjects:[]
        }
        this.addTopic = this.addTopic.bind(this);
        this.editTopic= this.editTopic.bind(this);
        this.deleteTopic = this.deleteTopic.bind(this);
    }
    deleteTopic(topicId){
        TopicService.deleteTopic(topicId).then( res => {
            this.setState({topics: this.state.topics.filter(topic => topic.topicId !== topicId)});
        });
    }
    editTopic(topicId){
        this.props.history.push(`/add-topic/${topicId}`);
    }

componentDidMount(){
    TopicService.getTopics().then((res) => {
        this.setState({ topics: res.data});
    });
    SubjectService.getSubjects().then((res) => {
        this.setState({ subjects: res.data});
        //console.log(this.state.subjects);
    });

}
addTopic(){
    this.props.history.push('/add-topic/_add');
}
render(){
  return (
    <div className="">
      <Navbar />
      <Sidebar />
        <div>
            <h2 className="text-center">Topic List</h2>
            <div className = "row">
                    <button className="btn btn-primary" onClick={this.addTopic}> +Add</button>
            </div>
            <div className="row table-responsive">
                <table className="table table-striped table-bordered align-middle">
                    <thead>
                        <tr>
                            <th>Topic No.</th>
                            <th>Topic Name</th>
                            <th>Subject Name</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                       {
                           this.state.topics.map(
                               topic =>
                               <tr key = {topic.topicId}>
                                   <td>{ topic.topicId }</td>
                                   <td>{ topic.topicName}</td>
                                   <td>{ topic.subjectName}</td>
                                   <td>
                                   <button onClick={ () => this.editTopic(topic.topicId)} className="btn btn-info">Update </button>
                                   <button style={{marginLeft: "10px"}} onClick={ () => this.deleteTopic(topic.topicId)} className="btn btn-danger">Delete </button>

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


