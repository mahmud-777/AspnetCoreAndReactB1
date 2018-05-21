import React, { Component } from 'react'

export default class GreetingsDiv  extends Component {

    constructor(props){
        super(props);

    }
    render() {
        return (
            <div>
                <h1>Hello{this.props.student.name}</h1>
            </div>
        );
    }
}
