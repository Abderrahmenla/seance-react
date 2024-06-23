import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  const [count,setCount] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World!
        </p>

        {count}
        <button onClick={() => setCount(count+1) } >
          Additionne
        </button>
        <button onClick={() => setCount(count-1) } >
          Soustraire 
        </button>
        <h1 className='text-white text-3xl font-black' >
          Heloooo Students
        </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;