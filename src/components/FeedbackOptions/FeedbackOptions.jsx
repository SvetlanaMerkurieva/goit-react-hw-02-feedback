import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul>
      {options.map(name => (
        <li>
          <button
            type="button"
            className={s.button}
            onClick={() => onLeaveFeedback(name)}
          >
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
};
FeedbackOptions.propTypes = {
  onLeaveFeedbackGood: PropTypes.func,
  onLeaveFeedbackNeutral: PropTypes.func,
  onLeaveFeedbackBad: PropTypes.func,
};
