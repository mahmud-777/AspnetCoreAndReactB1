import React,{Component} from 'react'

export default class Course extends Component{

    render(){

        return(
            <div>
            
            <li>{this.props.courseObj.code}:{this.props.courseObj.name}</li>

            </div>
        );
    }
}