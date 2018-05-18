import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import PersonList from './persons/PersonList';
import PersonInput from './persons/PersonInput';

class PersonApp extends Component {

    render(){

        return(

            <div>

            <header className="App-header">
                <h1 className="App-title">WelcomeReact</h1>
            </header>

           <PersonInput/>

            <PersonList/>

            </div>

        );
    }

}

export default PersonApp;

