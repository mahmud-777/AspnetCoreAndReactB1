import React, { Component } from 'react'
import { BrowserRouter as Router,Link,Route} from "react-router-dom";


export default class Sidebar extends Component {
    constructor(){
        super();

    }

   

    componentWillMount(){

    }

    render() {

        let menus=[
            {
                to:'/',text:'Home'
            },
            {
                to:'/student-list',text:'Students'
            }
        ];
        return (
            
            <div>
                <h2>sidebar</h2>
                <ul>
                    {/* <li><Link to="/">Home</Link></li>
                    <li><Link to="/student-list">Student</Link></li> */}

                    {
                        menus.map((x)=>
                        <li><Link to={x.to}>{x.text}</Link></li>)
                    }
                    
                </ul>
                <hr/>
               

            </div>

            
        )
    }
}
