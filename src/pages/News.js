import React, { Component } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DashboardFooter from "../components/DashboardFooter";
import NewsService from "../services/NewsService";

export default class News extends Component{
    constructor(props) {
        super(props)

        this.state = {
            newses: []
        }
        this.addNews = this.addNews.bind(this);
        this.editNews= this.editNews.bind(this);
        this.deleteNews = this.deleteNews.bind(this);
    }
    deleteNews(newsId){
        NewsService.deleteNews(newsId).then( res => {
            this.setState({subjects: this.state.newses.filter(news => news.newsId !== newsId)});
        });
    }
    editNews(newsId){
        this.props.history.push(`/add-news/${newsId}`);
    }

componentDidMount(){
    NewsService.getNews().then((res) => {
        this.setState({ newses: res.data});
    });
}
addNews(){
    this.props.history.push('/add-news/_add');
}
render(){
  return (
    <div className="">
      <Navbar />
      <Sidebar />
        <div>
            <h2 className="text-center">News List</h2>
            <div className = "row">
                    <button className="btn btn-primary" onClick={this.addNews}> +Add</button>
            </div>
            <div className="row table-responsive">
                <table className="table table-striped table-bordered align-middle">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>File Name</th>
                            <th>Exam</th>
                            <th>News Type</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                       {
                           this.state.newses.map(
                               news =>
                               <tr key = {news.newsId}>
                                   <td>{ news.newsId }</td>
                                   <td>{ news.fileName}</td>
                                   <td>{ news.exam}</td>
                                   <td>{ news.newsType}</td>

                                   <td>
                                   <button onClick={ () => this.editNews(news.newsId)} className="btn btn-info">Update </button>
                                   <button style={{marginLeft: "10px"}} onClick={ () => this.deleteNews(news.newsId)} className="btn btn-danger">Delete </button>

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


