import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export const Statistics = ({ statistics, total, positivePercentage }) => {
  return (
    <ul>
      {statistics.map(([key, value]) => (
        <li className={s.text}>
          {key}: <span className={s.number}>{value} </span>
        </li>
      ))}
      <li className={s.text}>
        Общее количество отзывов: <span className={s.number}>{total} </span>
      </li>
      <li className={s.text}>
        Позитивных отзывов:
        <span className={s.number}>{positivePercentage} </span> %
      </li>
    </ul>
  );
};
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
