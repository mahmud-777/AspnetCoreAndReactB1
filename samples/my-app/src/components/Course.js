import React, { Component } from 'react';

class Course extends Component{
    constructor(){
        super();
    }

    render(){

        return(

            <div>
                <h2>Course</h2>
                {/* <h2>{this.props.courseObj.name}</h2> */}
            </div>
        );
    }

}

export default Course;