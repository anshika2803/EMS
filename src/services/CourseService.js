import axios from "axios";

const url ="http://localhost:8080/course/course";
class CourseService {

    getCourses(){
        return axios.get(url);
    }
    createCourse(course){
        return axios.post(url,course);
    }
    getCourseById(courseId){
        return axios.get(url + '/' + courseId);
    }

    updateCourse(course, courseId){
        return axios.put(url + '/' + courseId, course);
    }
    deleteCourse(courseId){
        return axios.delete(url + '/' + courseId);
    }
}

export default new CourseService()
