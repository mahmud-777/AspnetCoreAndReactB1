import React, { Component } from 'react';

import Student from './Student';

class Students extends Component{

    constructor(){
        super();
    }

    
  

    render(){

        return(
            <div>
                <h2>Students</h2>
                {/*  <h2>{this.props.students.map((x)=>
                <Student studentObj={x} />)}</h2>  */}
            </div>
        );
    }
}

export default Students;