import React, { Component } from 'react';

import axios from 'axios';

class PersoInput extends Component{

    state={
        name:'',
    };

    
    
    handleSubmit=event=>{

        event.preventDefault();
        const user={

        };
        axios.get('https://jsonplaceholder.typicode.com/Users')
        .then(res=>{
            console.log(res);
            this.setState({person:res.data});
        });
    }

    render(){

        return(

            <ul>
                {this.state.person.map(person=>
                    <li key={person.id}>{person.name}</li>
                )}
            </ul>
        );
    }
}

export default PersoInput;