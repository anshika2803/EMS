import axios from "axios";

const url ="http://localhost:8080/question/question";
class QuestionService {

    getQuestions(){
        return axios.get(url);
    }
    createQuestion(question){
        return axios.post(url,question);
    }
    getQuestionById(questionId){
        return axios.get(url + '/' + questionId);
    }

    updateQuestion(question, questionId){
        return axios.put(url + '/' + questionId, question);
    }
    deleteQuestion(questionId){
        return axios.delete(url + '/' + questionId);
    }
}


export default new QuestionService()