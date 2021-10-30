import React, { Component } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DashboardFooter from "../components/DashboardFooter";
export default class Subject extends Component{

//     const displayInfo=(e)=>{
//         e.preventDefault()
//         const subject = {subjectId,SubjectName}
//     fetch("http://localhost:8080/subject",{
//        method: "GET",
//        headers:{"Content-Type":"application/json"},
//        body:JSON.stringify(subject)
//     }).then(()=>{
//         console.log("data displayed sucessfully")
//     })
// }
state = {
    loading: true,
    //subject: null
};
async componentDidMount(){
    const url ="http://localhost:8080/subject";
    const resp = await fetch(url);
    const data = await resp.json();
    console.log(data);
    //this.setState({ subject:data[0], loading: false});
}
render(){
  return (
    <div className="">
      <Navbar />
      <Sidebar />
        <div>
            {this.state.loading ? (
                 <div>loading...</div>
             ) : (
               <div>
                   {/* <div>
                       {this.state.subjectName}
                   </div> */}
               </div>
            )}

        </div>                                                
      <DashboardFooter />
    </div>
  );
}
};


