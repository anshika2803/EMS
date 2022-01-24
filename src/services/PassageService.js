import axios from "axios";

const url ="http://localhost:8080/passage/passage";
class PassageService {

    getPassages(){
        return axios.get(url);
    }
    
    createPassage(passage){
        return axios.post(url,passage);
    }
    getPassageById(passageId){
        return axios.get(url + '/' + passageId);
    }

    updatePassage(passage, passageId){
        return axios.put(url + '/' + passageId, passage);
    }
    deletePassage(passageId){
        return axios.delete(url + '/' + passageId);
    }
}

export default new PassageService()