import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

const FEEDBACKS = ['Good', 'Neutral', 'Bad'];

export class App extends Component {
  state = FEEDBACKS.reduce((obj, feedback) => ({ ...obj, [feedback]: 0 }), {});

  countTotalFeedback = () => {
    return FEEDBACKS.reduce((acc, f) => {
      return acc + this.state[f];
    }, 0);
  };

  onLeaveFeedback = feedbackName => {
    this.setState(prevState => ({
      ...prevState,
      [feedbackName]: (prevState[feedbackName] += 1),
    }));
  };

  countPositiveFeedbackPercentage = () => {
    let total = this.countTotalFeedback();
    const positiveFeeds = this.state['Good'];
    let percent = (positiveFeeds && positiveFeeds / total) * 100;
    let croppedPercent = percent.toFixed(2);
    return (croppedPercent + '').includes('.00') ? percent : croppedPercent;
  };

  render() {
    const {
      state,
      onLeaveFeedback,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;
    return (
      <div>
        <FeedbackOptions options={state} onLeaveFeedback={onLeaveFeedback} />
        {this.countTotalFeedback() ? (
          <Statistics
            options={state}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification />
        )}
      </div>
    );
  }
}
