import axios from 'axios'

export default class HttpRepository  {
    
    get(url){
        let result= axios.get(url).then(response=>{
            return response.data;
        });
        return result;
    }
}
