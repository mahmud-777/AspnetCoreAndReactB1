import React, { Component } from 'react'
import HttpService from '../Services/HttpService';

import {BrowserRouter as Router,Link,Route } from 'react-router-dom';
import Student from './Student';
export default class StudentList extends Component {
    constructor(){
        super();

        this.state={students:[]};
    }

    componentDidMount(){
        //fetch the data from server

        let http = new HttpService();

        let requestModel={};
        http.post('api/Teachers/Search',requestModel)
        .then(response=>{
            console.log(response.item1);
            this.setState({students:response.item1});
        });

        
    }
    render() {
        return (
            <div>
                <h2>StudentList</h2>
                <div>
                    <table>
                        <th>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Phone</td>
                            <td>Modified</td>
                        </th>

                        {
                            this.state.students.map((s)=>

                                //console.log(s);
                                <tr>
                                    <td>
                                        <Link to={'/student-list/'+s.id}>
                                        {s.id}
                                        </Link>
                                        {s.id}

                                    </td>
                                    <td>{s.name}</td>
                                    <td>{s.phone}</td>
                                    <td>{new Date(s.modified).toDateString()}</td>
                                </tr>
                            )
                        }
                    </table>
                </div>
                <hr/>
                <div>
                    <h3>hello guys!</h3>
                        {this.state.students.map((s,index)=>(
                            <Route exact key={index}
                            path='/student-list/:{s.id}' component={Student}/>
                        ))}
                    
                    
                      
                </div>
            </div>
        )
    }
}
