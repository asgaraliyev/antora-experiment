import logo from './logo.svg';
import React from "react"

/**
 * A counter component that displays a count and allows the user to increment or decrement it.
 *
 * @component
 */
function App() {
  const [counter, setCounter] = React.useState(0)
  function onIncrease() {
    setCounter(counter + 1)
  }
  return (
    <div className="App">
      {counter}
      <button onClick={(e) => {
        onIncrease()
      }}>Click me</button>
    </div>
  );
}
export default App;
