import * as React from 'react';
import './style.css';
import axios from 'axios';

export default class UserInfo extends React.Component{
    
    state = {
        userData: []
    };
    
    componentDidMount(){
        let user_email = localStorage.getItem('email_id')
        axios.get("http://127.0.0.1:5000/info/"+user_email)
        .then(res => {
            const userData = res.data;
            // console.log(societyData)
            this.setState({userData:userData.data});
        });
    }
    
    render(){

        console.log(this.state.userData)
        
        return (
            
            <div>
                <div>
                <div>
             {this.state.userData.map((s: any) => <div className="user-details"><strong>{s.first_name} {s.last_name}</strong><br></br>
             {s.designation}<br></br>{s.email_id}<br></br>{s.mobile}<br></br>{s.dob}</div>)}
                </div>
                </div>
            </div>
            
    
        )
    }
}