import React,{Component} from 'react'

export default class Teacher extends Component{

    render(){

        return(
            <div>

            
           <li> {this.props.teacherObj.name}: {this.props.teacherObj.department}</li>

            </div>
        );
    }
}