import axios from "axios";

const url ="http://localhost:8080/topic/topic";
class TopicService {

    getTopics(){
        return axios.get(url);
    }
    createTopic(topic){
        return axios.post(url,topic);
    }
    getTopicById(topicId){
        return axios.get(url + '/' + topicId);
    }

    updateTopic(topic,topicId){
        return axios.put(url + '/' + topicId, topic);
    }
    deleteTopic(topicId){
        return axios.delete(url + '/' + topicId);
    }
}

export default new TopicService();