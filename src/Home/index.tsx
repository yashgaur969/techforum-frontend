import * as React from 'react';
import './style.css';
import { Navigator } from '../components/Navigator';
import Dashboard from '../components/Dashboard';
import { Header } from '../components/Header';
import Popular from '../components/Popular';

export const Home: React.FC = () => {
    const [posttitle, setPostTitle] = React.useState('');
    const [postdescription, setPostDescription] = React.useState('');
    const onPostTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPostTitle(event.target.value);
    };
    const onPostDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPostDescription(event.target.value);
    };

    const postdata = (event: any) => {
        event.preventDefault();
        console.log('error')
        let title = posttitle;
        let description = postdescription;
        let first_name = localStorage.getItem('first_name')
        const data = { question: title, answer: description, first_name: first_name }
        fetch("http://127.0.0.1:5000/dashboard", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        }).then(res => console.log(res))
            .catch(error => console.error('Error:', error))
            .then(response => console.log('Success:', response));
    }

    return (
        <div className="main-home">
            <div className="header"><Header /></div>
            <div className="second-row">
                <div><Navigator /></div>
                <div className="form-post">
                    <div className="question-post">
                        <form onSubmit={postdata}>
                            <div className="home-container">
                                <div className="post-title"><input type="text" placeholder="Enter Post Title" value={posttitle} onChange={onPostTitleChange} name="posttitle" id="first" className="title" /><br></br></div>
                                <div className="post-description"><input type="text" placeholder="Enter Post Description" value={postdescription} onChange={onPostDescriptionChange} name="postdescription" id="second" className="description" /><br></br></div>
                                <div><button type="submit" className="button-class" value="next">POST</button></div>
                            </div>
                        </form>
                        <div className="popular-question"><p><b>Popular Questions</b></p>
                            <div><Popular /></div>
                        </div>
                    </div>
                    <div>
                        <Dashboard />
                    </div>
                </div>
            </div>
        </div>
    );
}