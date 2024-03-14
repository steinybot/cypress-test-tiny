import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => {throw "Muahahaha!"}}>Click</button>
      </header>
    </div>
  );
}

export default App;
