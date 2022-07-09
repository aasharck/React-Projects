import './App.css';
import Login from './components/Login';
import Profile from './components/Profile';
import ThemeColor from './components/ThemeColor';

function App() {
  return (
    <div className='App'>
      <Profile />
      <Login />
      <ThemeColor />
    </div>
  );
}

export default App;
