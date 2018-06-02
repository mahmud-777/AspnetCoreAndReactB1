import React, { Component } from 'react'
import { BrowserRouter as Router,Link,Route} from "react-router-dom";


export default class Students extends Component {
    render() {

        let studentIds=[1,2,3,4];
        return (
            <div>
                <h2>Students</h2>
                <ul>
                {
                    studentIds.map(x=>
                        <li><Link to={"/student-list/"+x}>{x}</Link></li>
                    )
                }
                </ul>
            </div>
        )
    }
}
