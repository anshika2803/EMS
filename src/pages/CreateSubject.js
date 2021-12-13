import React, { Component } from 'react'
import SubjectService from '../services/SubjectService';

export default class CreateSubject extends Component {
    constructor(props) {
        super(props)

        this.state = {
            subjectId: this.props.match.params.subjectId,
            subjectName: ''

        }
        this.changeSubjectNameHandler = this.changeSubjectNameHandler.bind(this);
        this.saveOrUpdateSubject = this.saveOrUpdateSubject.bind(this);
    }
    componentDidMount(){

        if(this.state.subjectId === '_add'){
            return
        }else{
            SubjectService.getSubjectById(this.state.subjectId).then((res) =>{
            let subject = res.data;
            this.setState({subjectName: subject.subjectName
                
            });
        });
    }
}
    saveOrUpdateSubject = (e) => {
        e.preventDefault();
        let subject = {subjectName: this.state.subjectName};
        console.log('subject => ' + JSON.stringify(subject));

        
        if(this.state.subjectId === '_add'){
            SubjectService.createSubject(subject).then(res =>{
                this.props.history.push('/subject');
            });
        }else{
            SubjectService.updateSubject(subject, this.state.subjectId).then( res => {
                this.props.history.push('/subject');
            });
        }
    }
    changeSubjectNameHandler= (event) => {
        this.setState({subjectName: event.target.value});
    }
    
    cancel(){
        this.props.history.push('/subject');
    }
    getTitle(){
        if(this.state.subjectId === '_add'){
            return <h3 className="text-center">Add Subject</h3>
        }else{
            return <h3 className="text-center">Update Subject</h3>
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
                                            <label> Subject Name: </label>
                                            <input placeholder="SubjectName" name="SubjectName" className="form-control" 
                                                value={this.state.subjectName} onChange={this.changeSubjectNameHandler}/>
                                        </div>
                                        
                                        

                                        <button className="btn btn-success" onClick={this.saveOrUpdateSubject}>Save</button>
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
