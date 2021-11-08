import React, { Component } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DashboardFooter from "../components/DashboardFooter";
import TopicService from "../services/TopicService";

export default class Topic extends Component{
    constructor(props) {
        super(props)

        this.state = {
            topics: []
        }
    }

componentDidMount(){
    TopicService.getTopics().then((res) => {
        this.setState({ topics: res.data});
    });
}
render(){
  return (
    <div className="">
      <Navbar />
      <Sidebar />
        <div>
            <h2 className="text-center">Topic List</h2>
            <div className="row table-responsive">
                <table className="table table-striped table-bordered align-middle">
                    <thead>
                        <tr>
                            <th>Topic No.</th>
                            <th>Subject No.</th>
                            <th>Topic Name</th>
                        </tr>
                    </thead>

                    <tbody>
                       {
                           this.state.topics.map(
                               topic =>
                               <tr key = {topic.topicId}>
                                   <td>{ topic.topicId }</td>
                                   <td>{ topic.subjectId}</td>
                                   <td>{ topic.topicName}</td>
                                   
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


