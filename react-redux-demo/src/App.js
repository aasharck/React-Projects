import { useSelector, useDispatch } from 'react-redux/es/exports';
import { actions } from './store';
import './App.css';

function App() {
  const counter = useSelector((state)=> state.counter)
  const dispatch = useDispatch()
  const increment = () =>{
    dispatch(actions.increment());
  }
  const decrement = () =>{
    dispatch(actions.decrement());
  }
  const addBy = () =>{
    dispatch(actions.addBy(10000));
  }
  return (
    <div className="App">
        <h2>Counter App</h2>
        <h4>{counter}</h4>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        <button onClick={addBy}>addBy</button>
    </div>
  );
}

export default App;
