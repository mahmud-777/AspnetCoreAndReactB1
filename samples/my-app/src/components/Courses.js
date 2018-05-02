import React, { Component } from 'react';

import Course from './Course';

class Courses extends Component{
    constructor(){
        super();
    }

    render(){

        return(

            <div>
                <h2>Courses</h2>
                 {/* <h2>{this.props.courses.map((x)=>
                <Course courseObj={x} />)}</h2> */}
            </div>
        );
        
        
    }
}

export default Courses;