import React,{Component} from 'react'

export default class Student extends Component{

    render(){

        return(
            <div>
            
            <li>{this.props.studentObj.name}:{this.props.studentObj.department}</li>

            </div>
        );
    }
}