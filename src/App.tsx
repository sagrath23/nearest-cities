import './App.css';
import { NearestCities } from './components/molecules';
import { cities } from './constants';
import { City } from './types';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NearestCities cities={cities as unknown as City[]} />
      </header>
    </div>
  );
}

export default App;
