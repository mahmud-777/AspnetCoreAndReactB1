import React, { Component } from 'react'

import { BrowserRouter as Router,Link,Route} from "react-router-dom";
import Sidebar from './Sidebar';
import Main from "./Main";

export default class MyApp extends Component {
    render() {
        return (
            <Router>
            <div class='row'>
                {/* <h2>MyApp</h2> */}
                
                    <Sidebar/>
                    <Main/>

                
            </div>
            </Router>
        )
    }
}
