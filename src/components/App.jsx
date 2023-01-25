import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';

const FEEDBACKS = ['good', 'neutral', 'bad'];

export class App extends Component {
  state = FEEDBACKS.reduce((obj, feedback) => ({ ...obj, [feedback]: 0 }), {});

  getTotalFeedbacks = () => {
    return FEEDBACKS.reduce((acc, f) => {
      return acc + this.state[f];
    }, 0);
  };
  onLeaveFeedback = e => {
    console.log(e.target);
  };
  // positivePercentage = ()=>{}

  render() {
    const { onLeaveFeedback, getTotalFeedbacks } = this;
    return (
      <div>
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={onLeaveFeedback}
        />
        <Statistics options={this.state} total={getTotalFeedbacks} />
      </div>
    );
  }
}
