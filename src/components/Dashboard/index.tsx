import * as React from 'react';
import './style.css';
import axios from 'axios';

import { Link } from 'react-router-dom';


export default class Dashboard extends React.Component{
    state = {
        cardData: []
    };
    componentDidMount(){
        axios.get("http://127.0.0.1:5000/dashboard")
        .then(res => {
            const cardData = res.data;
            // console.log(societyData)
            this.setState({cardData:cardData.data});
        });
    }
    
    render(){

        console.log(this.state.cardData)
        
        return (
            
            <div>
            <ul>
                {this.state.cardData.map((s:any) => <div><hr/><h1><strong>{s.question}</strong>
                     </h1><h1><strong>{s.answer}</strong></h1></div>)}
            </ul>
            </div>
            
    
        )
    }
}