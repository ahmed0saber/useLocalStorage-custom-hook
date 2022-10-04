import './App.css';
import useLocalStorage from './customHooks/useLocalStorage';

function App() {
  const [counter, setCounter] = useLocalStorage("counter", 0)

  const handleClick = () => {
    setCounter(x => x+1)
  }

  return (
    <main>
      <div>
        <h1>Clicks Counter</h1>
        <h3>with useLocalStorage custom hook</h3>
        <p>{counter}</p>
        <button onClick={handleClick}>click me</button>
      </div>
    </main>
  );
}

export default App;
