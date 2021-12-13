import axios from "axios";

const url ="http://localhost:8080/subcourse/subcourse";
class SubcourseService {

    getSubcourses(){
        return axios.get(url);
    }
    createSubcourse(subcourse){
        return axios.post(url,subcourse);
    }
    getSubcourseById(subcourseId){
        return axios.get(url + '/' + subcourseId);
    }

    updateSubcourse(subcourse, subcourseId){
        return axios.put(url + '/' + subcourseId, subcourse);
    }
    deleteSubcourse(subcourseId){
        return axios.delete(url + '/' + subcourseId);
    }
}

export default new SubcourseService()
