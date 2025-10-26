import './App.css';
import { Feedbacks } from './components/Feedbacks.jsx';
import { Statistics } from './components/Statistics.jsx'
import { Component } from 'react';

export default class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    addGood = () => {
        this.setState((prevState) => ({ good: prevState.good + 1 }));
    }

    addNeutral = () => {
        this.setState((prevState) => ({ neutral: prevState.neutral + 1 }));
        
    }

    addBad = () => {
        this.setState((prevState) => ({ bad: prevState.bad + 1 }));
    }

    countTotal = (good, neutral, bad) => {
        return good + neutral + bad;
    }

    countFeedback = (good, neutral, bad) => {
        return  Math.round((good / (neutral + good + bad)) * 100);
    }

    render() {
      return (
        <div className="App">
          <Feedbacks addGood={this.addGood} addNeutral={this.addNeutral} addBad={this.addBad}/>
          <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotal} feedback={this.countFeedback}/>
        </div>  
      );
    }
}


