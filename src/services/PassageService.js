import axios from "axios";

const url ="http://localhost:8080/passage";
class PassageService {

    getPassages(){
        return axios.get(url);
    }
}

export default new PassageService()