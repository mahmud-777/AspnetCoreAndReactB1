import React, { Component } from 'react'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'

import Home from './Components/Home';
import StudentEntry from './Components/StudentEntry';
import StudentList from './Components/StudentList';

export default class App extends Component {
  render() {
    return (
      <div>
        <h2>MYAP </h2>
        <Router>
            <div>
              <ul>
                  <li> <Link to="/">Home</Link></li>
                  <li> <Link to="/student-entry">Student Entry</Link></li>
                  <li> <Link to="/student-list">Student List</Link></li>
              </ul>
              <hr/>

              <Route path="/" exact='true' component={Home}/>
              <Route path="/student-entry" exact="true" component={StudentEntry}/>
              <Route path="/student-list" exact="true" component={StudentList}/>

            </div>
        </Router>
      </div>
    )
  }
}
