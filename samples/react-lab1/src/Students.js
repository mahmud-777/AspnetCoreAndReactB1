import React,{Component} from 'react'
import Student from './Student'

export default class Students extends Component{

    students=[
        {name:"Kamal",department:"CSE",color:"red"},
        {name:"Hamu",department:"EEE",color:"green"},
        {name:"Roji",department:"CE",color:"blue"}
    ]
    render(){

        return(
            <div>
                <h2>Students</h2>
            
            {this.students.map((s)=>
                <Student studentObj={s} />
            )}

            </div>
        );
    }
}