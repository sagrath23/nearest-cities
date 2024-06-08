import './App.css';
import { List } from './components/List';
import { cities } from './constants';
import { City } from './types';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <List values={cities as unknown as City[]} />
      </header>
    </div>
  );
}

export default App;
