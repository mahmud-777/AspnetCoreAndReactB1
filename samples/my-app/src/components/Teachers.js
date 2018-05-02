import React, { Component } from 'react';

import Teacher from './Teacher';

class Teachers extends Component{

    constructor(){

        super();
    }

    render(){

        return(

            <div>
                <h2>teacher</h2>
                 {/* <h2>{this.props.teachers.map((x)=>
                <Teacher teacherObj={x} />)}</h2> */}
            </div>
        );
    }

}

export default Teachers;