import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Students from './components/Students';
import Teachers from './components/Teachers';
import Courses from './components/Courses';
import Header from './components/Header';

  class App extends Component {

     constructor(){
      super();
    } 
    state={ students:[{name:"st1",department:"CSE",color:"red"},
                      {name:"st2",department:"EEE",color:"green"},
                      {name:"st3",department:"CE",color:"blue"}
  
                    ]
         };

  state={  teachers:[{name:"teacher1",department:"CSE",color:"red"},
    {name:"teacher2",department:"EEE",color:"green"},
    {name:"teacher3",department:"CE",color:"blue"}]
  };

  state={  courses:[{name:"Physics",code:"PH-001",color:"red"},
    {name:"Chemistry",code:"CH-001",color:"green"},
    {name:"Mathematics",code:"MATH-001",color:"blue"}]
  };



  
  render() {
    return (
      <div className="awesomeApp">
        <Header />
        
            <Students />
            <Teachers/>
            <Courses/>
        
        
        
      </div>
    );
  }
}

export default App;
