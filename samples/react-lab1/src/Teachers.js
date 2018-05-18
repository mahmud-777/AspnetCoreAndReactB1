import React,{Component} from 'react'
import Teacher from './Teacher'

export default class Teachers extends Component{

    teachers=[
        {name:"Foyzul",department:"CSE",color:"red"},
        {name:"Fazle",department:"EEE",color:"green"},
        {name:"Rayha",department:"CE",color:"blue"}
    ]
    render(){

        return(

            

            <div>
                <h1>Teachers</h1>
                {
                    this.teachers.map((t)=>
                        <Teacher teacherObj={t}/>
                    )
                }
            </div>
        );
    }
}