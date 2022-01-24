import axios from "axios";

const url ="http://localhost:8080/test/test";
class TestService {

    getTests(){
        return axios.get(url);
    }
    createTest(test){
        return axios.post(url,test);
    }
    getTestById(testId){
        return axios.get(url + '/' + testId);
    }

    updateTest(test,testId){
        return axios.put(url + '/' + testId, test);
    }
    deleteTest(testId){
        return axios.delete(url + '/' + testId);
    }
}

export default new TestService();