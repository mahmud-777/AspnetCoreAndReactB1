import React, { Component } from 'react'

export default class Student  extends Component {
    constructor(){
        super();

        this.clicked=this.clicked.bind(this);
    }

    clicked(){
        console.log('student clicked',this.props.studentObj);
        this.props.studentClicked(this.props.studentObj);

    }

    render() {
        let s=this.props.studentObj;
        let myStyle={
            background : s.color
        }
        return (
            /* <h2 style={myStyle} onClick={this.props.studentClicked}>{s.name  }</h2> */

            <h2 style={myStyle} onClick={this.clicked}>{s.name  }</h2>

        )
    }
}
