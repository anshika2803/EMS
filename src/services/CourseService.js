import axios from "axios";

const url ="http://localhost:8080/course";
class CourseService {

    getCourses(){
        return axios.get(url);
    }
}

export default new CourseService()