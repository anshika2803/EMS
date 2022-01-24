import React, { Component } from 'react'
import NewsService from '../services/NewsService';

export default class CreateNews extends Component {
    constructor(props) {
        super(props)

        this.state = {
            newsId: this.props.match.params.newsId,
            fileName: '',
            exam: '',
            newsType:''

        }
        this.changeFileNameHandler = this.changeFileNameHandler.bind(this);
        this.changeExamHandler = this.changeExamHandler.bind(this);
        this.changeNewsTypeHandler = this.changeNewsTypeHandler.bind(this);
        this.saveOrUpdateNews = this.saveOrUpdateNews.bind(this);
    }
    componentDidMount(){

        if(this.state.newsId === '_add'){
            return
        }else{
            NewsService.getSubjectById(this.state.newsId).then((res) =>{
            let news = res.data;
            this.setState({fileName: news.fileName,
                exam:news.exam,
                newsType:news.newsType
                
            });
        });
    }
}
    saveOrUpdateNews = (e) => {
        e.preventDefault();
        let news = {fileName: this.state.fileName,exam: this.state.exam,newsType:this.state.newsType};
        console.log('news => ' + JSON.stringify(news));

        
        if(this.state.newsId === '_add'){
            NewsService.createSubject(news).then(res =>{
                this.props.history.push('/news');
            });
        }else{
            NewsService.updateNews(news, this.state.newsId).then( res => {
                this.props.history.push('/news');
            });
        }
    }
    changeFileNameHandler= (event) => {
        this.setState({fileName: event.target.value});
    }
    changeExamHandler= (event) => {
        this.setState({exam: event.target.value});
    }
    changeNewsTypeHandler= (event) => {
        this.setState({newsType: event.target.value});
    }
    
    
    cancel(){
        this.props.history.push('/news');
    }
    getTitle(){
        if(this.state.newsId === '_add'){
            return <h3 className="text-center">Add News</h3>
        }else{
            return <h3 className="text-center">Update News</h3>
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
                                            <label> File Name: </label>
                                            <input placeholder="FileName" name="FileName" className="form-control" 
                                                value={this.state.fileName} onChange={this.changeFileNameHandler}/>
                                                <label> Exam: </label>
                                            <input placeholder="Exam" name="Exam" className="form-control" 
                                                value={this.state.exam} onChange={this.changeExamHandler}/>
                                                <label> News Type: </label>
                                                <input placeholder="NewsType" name="NewsType" className="form-control" 
                                                    value={this.state.newsType} onChange={this.changeNewstypeHandler}/>
                                        </div>
                                        
                                        

                                        <button className="btn btn-success" onClick={this.saveOrUpdateNews}>Save</button>
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
