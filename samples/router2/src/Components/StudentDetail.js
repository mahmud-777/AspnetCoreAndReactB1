import React, { Component } from 'react'

export default class StudentDetail extends Component {

    componentDidMount(){

        //we need the parameter
        let p=this.props;
        console.log(p.match.params.id);

        //axios call to server

        //then do the setState


    }
    render() {

        let p=this.props;
        //console.log(p.match.params.id);
        //console.log(p);
        return (
            <div>
                <h2>i StudentDetail{p.match.params.id}</h2>
            </div>
        )
    }
}
