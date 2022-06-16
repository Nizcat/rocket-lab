import { CapStatus } from './CapStatus';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <body>
        <header className={styles.Initial} >
          <div className={styles.titles}>
            <h1 className={styles.RocketTitle} >ROCKET</h1>
            <h2 className={styles.RocketSubtitle} >IMPROVING ALL THE TIME</h2>
          </div>
          <button className={styles.startButton} type="button"> START </button>
        </header>
        <CapStatus />
        <AllCapsules />
      </body>
    </div>
  );
}

export default App;
