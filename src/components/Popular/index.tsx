import * as React from 'react';
import './style.css';
import axios from 'axios';


export default class Popular extends React.Component {

    state = {
        popularData: []
    };

    componentDidMount() {
        axios.get("http://127.0.0.1:5000/popular")
            .then(res => {
                const popularData = res.data;
                console.log(popularData)
                this.setState({ popularData: popularData.data });
            });
    }

    render() {

        console.log(this.state.popularData)

        return (
            <div className="ppopular-list-class">
                {this.state.popularData.map((s: any) => <div className="ppopular-simple-text"><div className="ppopular-question">{s.question}</div>
                </div>)}
            </div>
        )
    }
}