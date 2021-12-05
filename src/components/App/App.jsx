import { Feedbacks } from '../Feedbacks/Feedbacks';
import s from './App.module.css';

function App() {
  return (
    <div className={s.app}>
      <header className={s.appHeader}>
        <Feedbacks />
      </header>
    </div>
  );
}

export default App;
