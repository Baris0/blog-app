import axios from "axios";

export default class PostService {

    getPost() {
        return axios.get("http://localhost:8080/api/post/list")
    }

    getTrendPost() {
        return axios.get("http://localhost:8080/api/post/list/trends")
    }
}