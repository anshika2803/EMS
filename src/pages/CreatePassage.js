import React, { Component } from 'react'
import PassageService from '../services/PassageService';

export default class CreatePassage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            passageId: this.props.match.params.passageId,
            passageName: '',
            language: ''          

        }
        this.changePassageNameHandler = this.changePassageNameHandler.bind(this);
        this.changeLanguageHandler = this.changeLanguageHandler.bind(this);
        this.saveOrUpdatePassage = this.saveOrUpdatePassage.bind(this);
    }
    componentDidMount(){

        if(this.state.passageId === '_add'){
            return
        }else{
        PassageService.getPassageById(this.state.passageId).then((res) =>{
            let passage = res.data;
            this.setState({passageName: passage.passageName,
                language: passage.language
            });
        });
    }
}
    saveOrUpdatePassage = (e) => {
        e.preventDefault();
        let passage = {passageName: this.state.passageName, language: this.state.language};
        console.log('passage => ' + JSON.stringify(passage));

        
        if(this.state.passageId === '_add'){
            PassageService.createPassage(passage).then(res =>{
                this.props.history.push('/passage');
            });
        }else{
            PassageService.updatePassage(passage, this.state.passageId).then( res => {
                this.props.history.push('/passage');
            });
        }
    }
    changePassageNameHandler= (event) => {
        this.setState({passageName: event.target.value});
    }
    changeLanguageHandler= (event) => {
        this.setState({language: event.target.value});
    }
    cancel(){
        this.props.history.push('/passage');
    }
    getTitle(){
        if(this.state.passageId === '_add'){
            return <h3 className="text-center">Add Passage</h3>
        }else{
            return <h3 className="text-center">Update Passage</h3>
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
                                            <label> Passage Name: </label>
                                            <input placeholder="PassageName" name="PassageName" className="form-control" 
                                                value={this.state.passageName} onChange={this.changePassageNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Language: </label>
                                            <input placeholder="Language" name="Language" className="form-control" 
                                                value={this.state.language} onChange={this.changeLanguageHandler}/>
                                        </div>
                                        

                                        <button className="btn btn-success" onClick={this.saveOrUpdatePassage}>Save</button>
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
