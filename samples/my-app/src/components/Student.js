
import React,{Component}from 'react';

class Student extends Component{

    constructor(){
        super();
    }

    render(){

        return(
            <div>
               
                <h2>Student</h2>
                  <h2>{this.props.studentObj.name}</h2> 
            </div>
        );
    }

}

export default  Student ;