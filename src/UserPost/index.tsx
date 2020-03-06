import * as React from 'react';
import './style.css';
import axios from 'axios';



export default class UserPost extends React.Component{
    
    state = {
        currData: []
    };
    
    componentDidMount(){
        let first_name = localStorage.getItem('first_name')
        axios.get("http://127.0.0.1:5000/user/posts/"+first_name)
        .then(res => {
            const currData = res.data;
             console.log(currData)
            this.setState({currData:currData.data});
        });
    }
    
    render(){

        console.log(this.state.currData)
        
        return (
            
            <div className="dashboardd-class">
                 <div className="simple-text"><p>Recently Asked</p></div>
                <div className="onee-card">
                <div className="listt-class">
        {this.state.currData.map((s: any) => <div className="single-card"><strong>{s.first_name} {s.last_name}</strong><br></br><h1><div className="question"><strong>{s.question}</strong></div></h1><br></br>{s.answer}</div>)}
                </div>
                </div>
            </div>
            
    
        )
    }
}