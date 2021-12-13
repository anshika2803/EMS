import axios from "axios";

const url ="http://localhost:8080/student/student";
class StudentService {

    getStudents(){
        return axios.get(url);
    }
    createStudent(student){
        return axios.post(url,student);
    }
    getStudentById(studentId){
        return axios.get(url + '/' + studentId);
    }

    updateStudent(student, studentId){
        return axios.put(url + '/' + studentId, student);
    }
    deleteStudent(studentId){
        return axios.delete(url + '/' + studentId);
    }
}

export default new StudentService()
