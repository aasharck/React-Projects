import './App.css';
import Lottery from './Lottery';
import Lottoball from './Lottoball';

function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title="Small" maxBalls={4} maxNum={10} />
    </div>
  );
}

export default App;
