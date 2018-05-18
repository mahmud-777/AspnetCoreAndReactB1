import React,{Component} from 'react'
import Course from './Course'

export default class Courses extends Component{

    courses=[
        {name:"Physics",code:"PH-001",color:"red"},
        {name:"Chemistry",code:"CH-001",color:"green"},
        {name:"Mathematics",code:"MATH-001",color:"blue"}
    ]
    render(){

        return(

            <div>
            <ul>
            <h1>Courses</h1>
            {
                this.courses.map((c)=>
                <Course courseObj={c} />
              )}

             </ul>

             </div>
        );
    }
}