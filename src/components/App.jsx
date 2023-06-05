import React, { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/Feedbackoptions';
import Statistics from './Statistics/Statistics';

export class App extends Component {

  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

  onClick = (event) => {
    const vote = event.currentTarget.textContent;
    // console.log(vote);

    this.setState(prevState => ({
    [vote]: this.state[vote] + 1,
    }));
  }

    totalFeedbackCount () {
      const { good, neutral, bad } = this.state;
    return good + neutral + bad;
    }
  
    positiveFeedbackPercentage() {
      return Math.round((this.state.good / this.totalFeedbackCount()) * 100);
    }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.totalFeedbackCount();
    
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.onClick}/>
        </Section>
        
        <Section title="Statistics">
          <Statistics good={good} neutral={neutral} bad={bad} total={total} positivePercentage={this.positiveFeedbackPercentage()}></Statistics>
        </Section>
      </div>
    )
  
  };
};