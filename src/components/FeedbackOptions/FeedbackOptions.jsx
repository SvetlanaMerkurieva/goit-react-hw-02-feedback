import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export const FeedbackOptions = ({
  onLeaveFeedbackGood,
  onLeaveFeedbackNeutral,
  onLeaveFeedbackBad,
}) => {
  return (
    <div>
      <button type="button" className={s.button} onClick={onLeaveFeedbackGood}>
        Хорошо
      </button>
      <button
        type="button"
        className={s.button}
        onClick={onLeaveFeedbackNeutral}
      >
        Нейтрально
      </button>
      <button type="button" className={s.button} onClick={onLeaveFeedbackBad}>
        Плохо
      </button>
    </div>
  );
};
FeedbackOptions.propTypes = {
  onLeaveFeedbackGood: PropTypes.func,
  onLeaveFeedbackNeutral: PropTypes.func,
  onLeaveFeedbackBad: PropTypes.func,
};
