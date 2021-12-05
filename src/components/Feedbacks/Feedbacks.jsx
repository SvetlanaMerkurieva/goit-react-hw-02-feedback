import { Component } from 'react';
/*import PropTypes from 'prop-types';*/
import s from './Feedbacks.module.css';

export class Feedbacks extends Component {
  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleIncrementGood = () => {
    this.setState(prevStateGood => {
      return {
        good: prevStateGood.good + 1,
      };
    });
  };
  handleIncrementNeutral = () => {
    this.setState(prevStateNeutral => {
      return {
        neutral: prevStateNeutral.neutral + 1,
      };
    });
  };
  handleIncrementBad = () => {
    this.setState(prevStateBad => {
      return {
        bad: prevStateBad.bad + 1,
      };
    });
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <div>
        <h2 className={s.title}>Пожалуйста оставьте отзыв</h2>
        <button
          type="button"
          className={s.button}
          onClick={this.handleIncrementGood}
        >
          Хорошо
        </button>
        <button
          type="button"
          className={s.button}
          onClick={this.handleIncrementNeutral}
        >
          Нейтрально
        </button>
        <button
          type="button"
          className={s.buttonLast}
          onClick={this.handleIncrementBad}
        >
          Плохо
        </button>
        <h3 className={s.title}>Статистика</h3>
        <p className={s.text}>Хорошо: {this.state.good}</p>
        <p className={s.text}>Нейтрально:{this.state.neutral}</p>
        <p className={s.text}>Плохо:{this.state.bad}</p>
        <p className={s.text}>
          Общее количество отзывов:{this.countTotalFeedback()}
        </p>
        <p className={s.text}>
          Позитивных отзывов:{this.countPositiveFeedbackPercentage()}%
        </p>
      </div>
    );
  }
}
