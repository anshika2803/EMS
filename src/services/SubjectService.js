import axios from "axios";

const url ="http://localhost:8080/subject/subject";
class SubjectService {

    getSubjects(){
        return axios.get(url);
    }
    createSubject(subject){
        return axios.post(url,subject);
    }
    getSubjectById(subjectId){
        return axios.get(url + '/' + subjectId);
    }

    updateSubject(subject, subjectId){
        return axios.put(url + '/' + subjectId, subject);
    }
    deleteCourse(subjectId){
        return axios.delete(url + '/' + subjectId);
    }
}

export default new SubjectService()