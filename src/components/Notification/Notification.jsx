import s from './Notification.module.css';

export const Notification = ({ message }) => {
  return <h2 className={s.message}>{message}</h2>;
};
