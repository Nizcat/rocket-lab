import { CapStatus } from './CapStatus';
import './App.css';

function App() {
  return (
    <div className="App">
      <body>
        <header className='Initial' >
          <div >
            <h1 className='RocketTitle' >
              <span>ROCKET</span>
              <span>Improving all the time</span>
            </h1>
          </div>
        </header>
        <CapStatus />
      </body>
    </div>
  );
}

export default App;
