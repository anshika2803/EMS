import axios from "axios";

const url ="http://localhost:8080/question";
class QuestionService {

    getQuestions(){
        return axios.get(url);
    }
}

export default new QuestionService()