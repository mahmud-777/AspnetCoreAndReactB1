import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Teachers from './Teachers'
import Header from './Header'
import Courses from './Courses'
import Students from './Students'

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Header/>

        <div>
          <Teachers/>
          <Courses/>
          <Students/>
        </div>
      </div>
    );
  }
}

export default App;
