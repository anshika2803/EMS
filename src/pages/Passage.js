import React, { Component } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DashboardFooter from "../components/DashboardFooter";
import PassageService from "../services/PassageService";

export default class Passage extends Component{
    constructor(props) {
        super(props)

        this.state = {
            passages: []
        }
        this.addPassage = this.addPassage.bind(this);
        this.editPassage= this.editPassage.bind(this);
        this.deletePassage = this.deletePassage.bind(this);
       // this.searchTerm = this.searchTerm.bind(this);
    }
    deletePassage(passageId){
        PassageService.deletePassage(passageId).then( res => {
            this.setState({passages: this.state.passages.filter(passage => passage.passageId !== passageId)});
        });
    }
    editPassage(passageId){
        this.props.history.push(`/add-passage/${passageId}`);
    }


componentDidMount(){
    PassageService.getPassages().then((res) => {
        this.setState({ passages: res.data});
        console.log(this.state.passages);
    });
}

addPassage(){
    this.props.history.push('/add-passage/_add');
}
render(){
  return (
    <div className="">
      <Navbar />
      <Sidebar />
        <div>
            <h2 className="text-center">Passage List</h2>
            <div className = "row">
                    <button className="btn btn-primary" onClick={this.addPassage}> +Add</button>
            </div>
            <div className="row">
                <input type= "text" placeholder="Search here...."/>
                {
                    this.state.passages.map((val,key) => {
                        return
                    })
                }

            </div>
            <div className="row table-responsive">
                <table className="table table-striped table-bordered align-middle">
                    <thead>
                        <tr>
                            <th>Passage No.</th>
                            <th>Passage Name</th>
                            <th>Language</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                       {
                           this.state.passages.map(
                            passage =>
                               <tr key = {passage.passageId}>
                                   <td>{ passage.passageId }</td>
                                   <td>{ passage.passageName}</td>
                                   <td>{ passage.language}</td>
                                   <td>
                                   <button onClick={ () => this.editPassage(passage.passageId)} className="btn btn-info">Update </button>
                                   <button style={{marginLeft: "10px"}} onClick={ () => this.deletePassage(passage.passageId)} className="btn btn-danger">Delete </button>

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