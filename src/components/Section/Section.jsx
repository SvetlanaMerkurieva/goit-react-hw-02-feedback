import PropTypes from 'prop-types';
import s from './Section.module.css';

export const Section = ({ title }) => {
  return <h2 className={s.title}>{title}</h2>;
};
Section.propTypes = {
  title: PropTypes.string,
};
