import * as React from 'react';
import './style.css';
import axios from 'axios';


export default class Dashboard extends React.Component {

    state = {
        cardData: []
    };

    componentDidMount() {
        axios.get("http://127.0.0.1:5000/dashboard")
            .then(res => {
                const cardData = res.data;
                console.log(cardData)
                this.setState({ cardData: cardData.data });
            });
    }

    render() {

        console.log(this.state.cardData)

        return (

            <div className="dashboard-class">
                <div className="simple-text"><p>Recently Asked</p></div>
                <div className="one-card">
                    <div className="list-class">
                        {this.state.cardData.map((s: any) => <div className="single-card"><strong>{s.first_name}</strong><h1><strong>{s.question}</strong>
                        </h1>{s.answer}</div>)}
                    </div>
                </div>
            </div>


        )
    }
}