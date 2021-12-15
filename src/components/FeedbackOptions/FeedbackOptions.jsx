import PropTypes from 'prop-types';
import shortid from 'shortid';
import s from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={s.list}>
      {options.map(name => (
        <li key={shortid.generate()}>
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
  onLeaveFeedback: PropTypes.func,
};
