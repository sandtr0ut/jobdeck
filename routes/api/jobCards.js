import axios from "axios";

export default {
    getRandomJob: function (){
        return axios.get("mongodb+srv://test1:test1@passport-test-obpjj.mongodb.net/test?retryWrites=true&w=majority");
    }
}