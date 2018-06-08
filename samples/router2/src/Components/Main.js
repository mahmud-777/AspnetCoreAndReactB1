import React, { Component } from 'react'
import { BrowserRouter as Router,Link,Route} from "react-router-dom";
import Home from './Home';
import Students from './Students';

import StudentDetail from './StudentDetail';

import Departments from './Departments';
import DepartmentDetail from './DepartmentDetail';

import Courses from './Courses';
import Teachers from './Teachers';
import TeacherDetail from './TeacherDetail';
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
            },

            {
                path:"/department-list",
                exact:true,
                
                main:Departments
            },
            {
                path:"/department-list/:id",
                exact:true,
                
                main:DepartmentDetail
            },

            {
                path:"/course-list",
                exact:true,
                
                main:Courses
            },

            {
                path:"/teacher-list",
                exact:true,
                
                main:Teachers
            },
            {
                path:"/teacher-list/:id",
                exact:true,
                
                main:TeacherDetail
            }
    
            
        ];

        return (
            <div class="container-fluid">
                {/* <h2>Main</h2> */}
                <div class="side-body">
                     {/* <Route path="/" exact="true" component={Home}/>
                     <Route path="/student-list" exact="true" component={Students}/>
                     <Route path="/student-list" exact="true" component={StudentDetail}/> */}

                    {
                        routes.map((route,index)=>(
                            <Route path={route.path} exact={route.exact} component={route.main}/>
                        ))
                    }
                </div>
               


            </div>
        )
    }
}
