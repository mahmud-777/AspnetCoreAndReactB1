import React, { Component } from 'react'

import { BrowserRouter as Router,Link,Route} from "react-router-dom";
import HttpService from './HttpService';

export default class Teachers extends Component {

    constructor(){
        super();
        this.state={teachers:[]};
    }

    componentDidMount(){
        let self=this;
        let request={};

        let http= new HttpService();
        http.post(request,"/api/Teachers/search").then(response=>{

            self.setState({teachers:response.item1})
        });


        // let url = 'http://localhost:64734/api/Teachers/search';
        // let f= fetch(url,{
        //     body: JSON.stringify(request),
        //     headers:{
        //         'content-type':'application/json'
        //     },

        //     method:"POST",
        //     mode:"cors"


        // }).then(response=>response.json())
        // .then(function(data){
        //     console.log(data.item1);
        //     self.setState({teachers:data.item1})
        // });
        
    }

    render() {
        return (
            <div>
                <h2>iteachers</h2>
                <ul>
                    {this.state.teachers.map((t)=>
                    <li><Link to={"/teacher-list/"+t.id}>{t.name}</Link></li>
                    
                    )}
                </ul>
            </div>
        )
    }
}
