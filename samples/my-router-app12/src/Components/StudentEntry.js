import React, { Component } from 'react'
import HttpService from '../Services/HttpService';

export default class StudentEntry extends Component {

    constructor(){
        super();

        this.state={name:'',phone:''}
        this.handleInputChange=this.handleInputChange.bind(this);
        this.submitForm=this.submitForm.bind(this);
    }
    submitForm=(e)=>{
        e.preventDefault();
       // console.log(this.state);
       //http service
       //const url ='http://localhost:64734/api/values'
       let http=new HttpService();
       http.post('api/Teachers/Add',this.state).then(result=>{
            console.log(result);

            this.setState({name: '', phone: ''})
       });

     // const url ='http://localhost:64734/api/values'
     // http.get(url).then(result=>{
     //     console.log(result);
    //  })
       
    //  var data= new FormData();
    //  data.append("json",JSON.stringify(this.state))

      //fetch(url,{
        //    method:"POST",
        //    body:this.state,
        //    headers:{
        //        'Accept':'application/json',
        //        'Content-Type':'application/json',
        //    },

     // }).then(function(res){console.log(res);});


    }

    handleInputChange(event){
        console.log(event.target.name);
        this.setState({[event.target.name]:event.target.value});

        console.log(this.state);
    }
    
    render() {
        return (
            <div>
                <h2>StudentEntry</h2>
                <form onSubmit={this.submitForm}>
                <input type="text" name="name" id="name" placeholder="input name"
                value={this.state.name} onChange={this.handleInputChange}  />

                <input type="text" name="phone" id="phone" placeholder="input phone"
                value={this.state.phone}  onChange={this.handleInputChange} />

                <input type="Submit" value="Submit"/>

                </form>

            </div>
        );
    }
}
