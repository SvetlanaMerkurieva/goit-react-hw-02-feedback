import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div>
      <p className={s.text}>
        Хорошо: <span className={s.number}>{good} </span>
      </p>
      <p className={s.text}>
        Нейтрально: <span className={s.number}>{neutral} </span>
      </p>
      <p className={s.text}>
        Плохо: <span className={s.number}>{bad} </span>
      </p>
      <p className={s.text}>
        Общее количество отзывов: <span className={s.number}>{total} </span>
      </p>
      <p className={s.text}>
        Позитивных отзывов:{' '}
        <span className={s.number}>{positivePercentage} </span> %
      </p>
    </div>
  );
};
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
