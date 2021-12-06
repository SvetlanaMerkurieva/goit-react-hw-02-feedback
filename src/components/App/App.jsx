import { Component } from 'react';
import { Section } from '../Section/Section';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { Notification } from '../Notification/Notification';
import { countTotalFeedback } from '../../functions/countTotalFeedback';
import { countPositiveFeedbackPercentage } from '../../functions/countPositiveFeedbackPercentage';
import s from './App.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    visible: false,
  };
  onLeaveFeedbackGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  onLeaveFeedbackNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  onLeaveFeedbackBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = countTotalFeedback(good, neutral, bad);
    const positivePercentage = countPositiveFeedbackPercentage(good, total);
    return (
      <div className={s.app}>
        <header className={s.appHeader}>
          <Section title="Пожалуйста, оставьте отзыв" />
          <FeedbackOptions
            onLeaveFeedbackGood={this.onLeaveFeedbackGood}
            onLeaveFeedbackNeutral={this.onLeaveFeedbackNeutral}
            onLeaveFeedbackBad={this.onLeaveFeedbackBad}
          />
          {!total && <Notification message="Отзывов нет" />}
          {total && (
            <>
              <Section title="Статистика отзывов" />
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={total}
                positivePercentage={positivePercentage}
              />
            </>
          )}
        </header>
      </div>
    );
  }
}
export default App;
