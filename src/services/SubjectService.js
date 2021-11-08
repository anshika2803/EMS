import axios from "axios";

const url ="http://localhost:8080/subject";
class SubjectService {

    getSubjects(){
        return axios.get(url);
    }
}

export default new SubjectService()