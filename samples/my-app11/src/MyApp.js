import React, { Component } from 'react'


import Greeting from './GreetingsDiv';
import Student from './Student';
import HttpRepository from './HttpRepository';
import StudentFilter from './StudentFilter';

export default class MyApp extends Component {
    constructor(){
        super();

        this.state={ students:[],selectedStudent:{name:'everyone'}};
        this.studentClicked=this.studentClicked.bind(this);

         /* this.state={students:[],filteredStudent:[],selectedStudent:{name:'everybody'}};
         this.studentClicked=this.studentClicked.bind(this);  */

        /* this.state={student:{name:"everyoe"},keyword:'',students:[],filteredStudents:[]}
        this.handleClick=this.handleClick.bind(this);
        this.handleStudentFilter=this.handleStudentFilter.bind(this); */

        
    }


    /* handleClick(x){
        this.setState({student:x})
        console.log(this.state);
    } */

    handleStudentFilter(event){
        this.setState({keyword:event.target.value});

        var result= this.state.students.filter(x=>x.name.indexOf(event.target.value) != -1);
        this.setState({filteredStudent:result});

    }

    componentWillMount(){
         /* let r = new HttpRepo(); 

      
        console.log(r);
        let temp = r.get('https://jsonplaceholder.typicode.com/users').then( x=> {
            this.setState({students: x, filteredStudents : x});
        }); */
    }
    componentDidMount(){

         /*  let http = new HttpRepository();
        http.get('http://localhost:55013/api/Students/GetStudents')
        .then(result => {
            this.setState({ students : result, filteredStudent : result});
        }); */
        let http=new HttpRepository();
        http.get('http://localhost:55013/api/Students/GetStudents')
            .then(result=>{
                this.setState({students:result
                })
            });

    }


    // write some functions can be access from both : student and greetings
    studentClicked(student){
        
        console.log(student);
        this.setState({selectedStudent:student})

        /* this.setState({selectedStudent:student}); */
    }

    keywordChanged(event){
        console.log(event.target.value);
         let searchResult = 
        this.state.students.filter(x=> x.name.indexOf(event.target.value) != -1);
        // searching on students. set result on filtered students
        this.setState({
            filteredStudent : searchResult
        }); 
    }


    render() {

        const now=new Date();
        let value="hello guys "+now.toDateString();
        let values=["first","second","third"];
        
         /* let students=[
            {objectID:"1",name:"Foyzul",course:"C#",color:"yellow"},
            {objectID:"2",name:"Fazley",course:"F#",color:"lightgreen"},
            {objectID:"3",name:"Romi",course:"TS",color:"lightblue"}
        ]; */ 
        
        

        return (
            <div>
                {/* <StudentFilter handleFilter={this.handleStudentFilter} /> */}

                {/* <StudentFilter keywordChaged={this.keywordChanged} />
            <Greeting student={this.state.selectedStudent}/> 
                <h2>Filter : {this.state.keyword}</h2> */}

                <Greeting student={this.state.selectedStudent }/>
                <h2>{values.length}</h2>

                <ul>
                    {this.state.students.map((x)=>
                    <li key={x.id}>
                        <Student studentObj={x} studentClicked=
                        {this.studentClicked}/>
                    </li>)}
                </ul> 

                 <ul>
                    {/* {this.state.filteredStudent.map((x)=>
                    <li key={x.id}>
                        <Student studentObj={x} studentClicked={this.studentClicked}/>
                    </li>)} */}
                </ul> 

                {/* <div>
                <h3>Click on the name of the above students: </h3>
                <Greeting student={this.state.student}/>
                

                </div> */}

                 

            </div>
        )
    }
}
