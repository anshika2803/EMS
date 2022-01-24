import React, { Component } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DashboardFooter from "../components/DashboardFooter";
import CourseService from "../services/CourseService";
// import axios from 'axios';
// import ReactPaginate from 'react-paginate';
// import $ from 'jquery';
// import ReactDOM from 'react-dom';
import ReactDOM from "react-dom";
import Pagination from "react-js-pagination";
//require("bootstrap/less/bootstrap.less");

export default class Course extends Component{
    constructor(props) {
        super(props)

        this.state = {
            courses: [],
            activePage: 15

            // currentPage:1,
            // perPage: 10,
            // upperPageBound:10,
            // lowerPageBound:0,
            // isPrevBtnActive: 'disabled',
            // isNextBtnActive: '',
            // pageBound: 10
        }
        this.addCourse = this.addCourse.bind(this);
        this.editCourse= this.editCourse.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
        // this.handleClick = this.handleClick.bind(this);
        // this.btnDecrementClick = this.btnDecrementClick.bind(this);
        // this.btnIncrementClick = this.btnIncrementClick.bind(this);
        // this.btnNextClick = this.btnNextClick.bind(this);
        // this.btnPrevClick = this.btnPrevClick.bind(this);
        // this.setPrevAndNextBtnClass = this.setPrevAndNextBtnClass.bind(this);
    }
    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
      }
    deleteCourse(courseId){
        CourseService.deleteCourse(courseId).then( res => {
            this.setState({courses: this.state.courses.filter(course => course.courseId !== courseId)});
        });
    }
    editCourse(courseId){
        this.props.history.push(`/add-course/${courseId}`);
    }


componentDidMount(){
    CourseService.getCourses().then((res) => {
        this.setState({ courses: res.data});
        console.log(this.state.courses);
        // const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
    });
}
// componentDidUpdate(){
//     $("ul li.active").removeClass('active');
//     $('ul li#'+this.state.currentPage).addClass('active'); 
// }

addCourse(){
    this.props.history.push('/add-course/_add');
}
// handleClick(event) {
//     let listid = Number(event.target.id);
//     this.setState({
//       currentPage: listid
//     });
//     $("ul li.active").removeClass('active');
//     $('ul li#'+listid).addClass('active');
//     this.setPrevAndNextBtnClass(listid);
//   }
//   setPrevAndNextBtnClass(listid) {
//     let totalPage = Math.ceil(this.state.courses.length / this.state.perPage);
//     this.setState({isNextBtnActive: 'disabled'});
//     this.setState({isPrevBtnActive: 'disabled'});
//     if(totalPage === listid && totalPage > 1){
//         this.setState({isPrevBtnActive: ''});
//     }
//     else if(listid === 1 && totalPage > 1){
//         this.setState({isNextBtnActive: ''});
//     }
//     else if(totalPage > 1){
//         this.setState({isNextBtnActive: ''});
//         this.setState({isPrevBtnActive: ''});
//     }
// }
//   btnIncrementClick() {
//       this.setState({upperPageBound: this.state.upperPageBound + this.state.pageBound});
//       this.setState({lowerPageBound: this.state.lowerPageBound + this.state.pageBound});
//       let listid = this.state.upperPageBound + 1;
//       this.setState({ currentPage: listid});
//       this.setPrevAndNextBtnClass(listid);
// }
//   btnDecrementClick() {
//     this.setState({upperPageBound: this.state.upperPageBound - this.state.pageBound});
//     this.setState({lowerPageBound: this.state.lowerPageBound - this.state.pageBound});
//     let listid = this.state.upperPageBound - this.state.pageBound;
//     this.setState({ currentPage: listid});
//     this.setPrevAndNextBtnClass(listid);
// }
// btnPrevClick() {
//     if((this.state.currentPage -1)%this.state.pageBound === 0 ){
//         this.setState({upperPageBound: this.state.upperPageBound - this.state.pageBound});
//         this.setState({lowerPageBound: this.state.lowerPageBound - this.state.pageBound});
//     }
//     let listid = this.state.currentPage - 1;
//     this.setState({ currentPage : listid});
//     this.setPrevAndNextBtnClass(listid);
// }
// btnNextClick() {
//     if((this.state.currentPage +1) > this.state.upperPageBound ){
//         this.setState({upperPageBound: this.state.upperPageBound + this.state.pageBound});
//         this.setState({lowerPageBound: this.state.lowerPageBound + this.state.pageBound});
//     }
//     let listid = this.state.currentPage + 1;
//     this.setState({ currentPage : listid});
//     this.setPrevAndNextBtnClass(listid);
// }
render(){
//     const { courses, currentPage, perPage, upperPageBound, lowerPageBound, isPrevBtnActive, isNextBtnActive } = this.state;
//     // Logic for displaying current todos
//     const indexOfLastCourse = currentPage * perPage;
//     const indexOfFirstCourse = indexOfLastCourse - perPage;
//     const currentCourses = courses.slice(indexOfFirstCourse, indexOfLastCourse);

//     const renderCourses = currentCourses.map((course, index) => {
//         return <li key={index}>{course}</li>;
//     });
// const pageNumbers = [];
// for(let i =1;i<=Math.ceil(courses.length /perPage);i++ )
// {
//     pageNumbers.push(i);
// }
// const renderPageNumbers = pageNumbers.map(number => {
//     if(number === 1 && currentPage === 1){
//         return(
//             <li key={number} className='active' id={number}><a href='#' id={number} onClick={this.handleClick}>{number}</a></li>
//         )
//     }
//     else if((number < upperPageBound + 1) && number > lowerPageBound){
//         return(
//             <li key={number} id={number}><a href='#' id={number} onClick={this.handleClick}>{number}</a></li>
//         )
//     }
// });
// let pageIncrementBtn = null;
//             if(pageNumbers.length > upperPageBound){
//                 pageIncrementBtn = <li className=''><a href='#' onClick={this.btnIncrementClick}> &hellip; </a></li>
//             }
//             let pageDecrementBtn = null;
//             if(lowerPageBound >= 1){
//                 pageDecrementBtn = <li className=''><a href='#' onClick={this.btnDecrementClick}> &hellip; </a></li>
//             }
//             let renderPrevBtn = null;
//             if(isPrevBtnActive === 'disabled') {
//                 renderPrevBtn = <li className={isPrevBtnActive}><span id="btnPrev"> Prev </span></li>
//             }
//             else{
//                 renderPrevBtn = <li className={isPrevBtnActive}><a href='#' id="btnPrev" onClick={this.btnPrevClick}> Prev </a></li>
//             }
//             let renderNextBtn = null;
//             if(isNextBtnActive === 'disabled') {
//                 renderNextBtn = <li className={isNextBtnActive}><span id="btnNext"> Next </span></li>
//             }
//             else{
//                 renderNextBtn = <li className={isNextBtnActive}><a href='#' id="btnNext" onClick={this.btnNextClick}> Next </a></li>
//             }

  return (
    <div className="">
      <Navbar />
      <Sidebar />
        <div>
            <h2 className="text-center">Course List</h2>
            <div className = "row">
                    <button className="btn btn-primary" onClick={this.addCourse}> +Add</button>
            </div>
            <div className="row">
                <input type= "text" placeholder="Search here...."/>
                {
                    this.state.courses.map((val,key) => {
                        return
                    })
                }

            </div>
            <div className="row table-responsive">
                <table className="table table-striped table-bordered align-middle">
                    <thead>
                        <tr>
                            <th>Course No.</th>
                            <th>Course Name</th>
                            <th>Course Code</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                       {
                           this.state.courses.map(
                               course =>
                               <tr key = {course.courseId}>
                                   <td>{ course.courseId }</td>
                                   <td>{ course.courseName}</td>
                                   <td>{ course.courseCode}</td>
                                   <td>
                                   <button onClick={ () => this.editCourse(course.courseId)} className="btn btn-info">Update </button>
                                   <button style={{marginLeft: "10px"}} onClick={ () => this.deleteCourse(course.courseId)} className="btn btn-danger">Delete </button>

                                   </td>

                                   
                               </tr>
                           )
                       } 
                    </tbody>

                </table>
            </div>
             

        </div>  
        {/* <ul id="page-numbers" className="pagination">
                  {renderPrevBtn}
                  {pageDecrementBtn}
                  {renderPageNumbers}
                  {pageIncrementBtn}
                  {renderNextBtn}
                </ul>                                               */}
                <div>
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={10}
          totalItemsCount={450}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange.bind(this)}
        />
      </div>
      <DashboardFooter />
      
    </div>
  );
}
};
//ReactDOM.render(<Course />, document.getElementById('root'));
