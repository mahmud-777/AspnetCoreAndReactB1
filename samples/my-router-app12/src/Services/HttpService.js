import axios from 'axios';

export default class HttpService {

    baseUrl="";

    constructor(){
        this.baseUrl="http://localhost:64734/";
    }

    post(url,model){
            //url='http://localhost:25697/'+url
        return axios.post(this.baseUrl+url,model).then(response=>{
            return response.data;
        });
    }

    get(url){
        return axios.get(this.baseUrl+url).then(response=>{
            return response.data;
        });
    }
}