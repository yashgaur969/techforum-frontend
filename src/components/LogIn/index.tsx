import * as React from 'react';
import './style.css';
import { Link, useHistory } from 'react-router-dom';


export const LogIn: React.FC = () => {

    const [emailId, setEmailId] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [name, setName] = React.useState('');
    const onEmailIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmailId(event.target.value);
    };

    const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const getdata = (event: any)=>{
        event.preventDefault();

        let email = emailId;
        let pass = password;
        const data = {email_id:email, password:pass,name:name}
        fetch("http://127.0.0.1:5000/users/login", {
            method: 'POST',
            body:JSON.stringify(data),
            headers : { 'Content-Type': 'application/json' } 
         }).then(res => res.json())
         .then(res => {
            localStorage.setItem('token', res.access_token)
            localStorage.setItem('email_id', res.email_id)
            localStorage.setItem('first_name', res.first_name)
            window.location.reload(false)
        })
         .catch(error => console.error('Error:', error))
         .then(response => console.log('Success:', response)); 
    }
    const historyelement = useHistory()
            if(localStorage.length>0)
            historyelement.push('/home')

    return(
        <form onSubmit={getdata}>
            <div className="container">
                    <div><input type="text" placeholder= "EmailId" value={emailId} onChange={onEmailIdChange}  name="email" id="email"/><br></br></div>
                    <div><input type="password" placeholder= "password" value={password} onChange={onPasswordChange}name="password" id="password"/><br></br></div>
                    <div><button type="submit" className="button-class" value="next">Login</button></div>
                    <div><p><a href="forgot password">forgot password</a></p></div>
                    <div className="login-redirect">
                   <p> Sign Up instead <Link to="/signup">Sign Up</Link></p>
               </div>
            </div>
            
        </form>
    )
    
}
