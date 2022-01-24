import axios from "axios";

const url ="http://localhost:8080/news/news";
class NewsService {

    getNews(){
        return axios.get(url);
    }
    createNews(news){
        return axios.post(url,news);
    }
    getNewsById(newsId){
        return axios.get(url + '/' + newsId);
    }

    updateNews(news, newsId){
        return axios.put(url + '/' + newsId, news);
    }
    deleteNews(newsId){
        return axios.delete(url + '/' + newsId);
    }
}

export default new NewsService()
