import React, { Component } from 'react';

import axios from 'axios';

class PersoInput extends Component{

    state={
        name:'',
    };

    handleChange=(event)=>{

        this.setState(
            {name:event.target.value}
        );
    };
    
    handleSubmit=(event)=>{

        event.preventDefault();
        const user={
            name:this.state.name,
        };

        axios.post('https://jsonplaceholder.typicode.com/Users')
        .then(res=>{
            console.log(res);
            // console.log({res.data});
        });
    };

    render(){

        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Person Name:<input type="text" name="name" onChange={this.handleChange }/>
                </label>
                <button type="submit">Add</button>
            </form>

            <ul>
                {this.state.person.map(person=>
                    <li key={person.id}>{person.name}</li>
                )}
            </ul>
        );
    }
}

export default PersoInput;