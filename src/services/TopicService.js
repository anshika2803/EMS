import axios from "axios";

const url ="http://localhost:8080/topic";
class TopicService {

    getTopics(){
        return axios.get(url);
    }
}

export default new TopicService();