

export default class HttpService {

    baseUrl="";
    constructor(){
        
        this.baseUrl="http://localhost:64734";
    }
    
    get(subUrl){
        let url= this.baseUrl+subUrl;
        let f=fetch(url,{
            method:"GET",
            mode:"cors"
        }).then(resp=>resp.json())
        .then(function(data){
            return data;
        });

        return f;
    }

    post(request,subUrl){

        let url =this.baseUrl + subUrl;
        let f= fetch(url,{
            body: JSON.stringify(request),
            headers:{
                'content-type':'application/json'
            },

            method:"POST",
            mode:"cors"


        }).then(resp=>resp.json())
        .then(function(data){
            //console.log(data.item1);
            //self.setState({teachers:data.item1})

            return data;
        });

        return f;
    }
}
