import React, { Component } from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/Feedbackoptions';

export class App extends Component {

  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

  onClick = (event) => {
    const vote = event.currentTarget.textContent;
    console.log(vote);
    
  }


  render() {
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions options={['good', 'neutral', 'bad']} onFeedbackCount={this.onClick}/>
      </Section>
      </div>
    )
  
  };
};
