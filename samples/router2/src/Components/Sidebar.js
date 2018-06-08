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
                to:'/',
                text:'Home'
            },
            {
                to:'/department-list',
                text:'Departments'
            },
            {
                to:'/course-list',
                text:'Courses'
            },


            {
                to:'/student-list',
                text:'Students'
            },
            {
                to:'/teacher-list',
                text:'Teachers'
            }
        ];
        return (
            
            <div class="side-menu">

            <nav class="navbar navbar-default" role="navigation">
                <div class="side-menu-container">
                    <ul class="nav navbar-nav">
                        {/* <li><Link to="/">Home</Link></li>
                        <li><Link to="/student-list">Student</Link></li> */}

                        {
                            menus.map((x)=>
                            <li><Link to={x.to}>{x.text}</Link></li>)
                        }
                        
                    </ul>
                </div>
            
            </nav>
                
                
                <hr/>
               

            </div>

            
        )
    }
}
