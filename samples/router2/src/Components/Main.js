import React, { Component } from 'react'
import { BrowserRouter as Router,Link,Route} from "react-router-dom";
import Home from './Home';
import Students from './Students';

import StudentDetail from './StudentDetail';
export default class Main extends Component {

    constructor(){
        super();
    }

    

    render() {
        
        let routes=[
            {
                path:"/",
                exact:true,
                
                main:Home
            },
            
    
            {
                path:"/student-list",
                exact:true,
                
                main:Students
            },
    
            {
                path:"/student-list/:id",
                exact:true,
                
                main:StudentDetail
            }
    
            
        ];

        return (
            <div>
                <h2>Main</h2>
                {/* <Route path="/" exact="true" component={Home}/>
                <Route path="/student-list" exact="true" component={Students}/>
                <Route path="/student-list" exact="true" component={StudentDetail}/> */}

                {
                    routes.map((route,index)=>(
                        <Route path={route.path} exact={route.exact} component={route.main}/>
                    ))
                }


            </div>
        )
    }
}
