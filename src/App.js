import logo from './logo.svg';
import './App.css';
import Asciidoctor from 'asciidoctor'
import React from "react"
let doc = ``

const asciidoctor = Asciidoctor()
doc += asciidoctor.convert(`#Testing`)

doc += asciidoctor.convert(`[source,js]
----
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
----
`, {
  attributes: {
    'source-highlighter': 'highlight.js',
    'highlightjs-theme': 'dark',
    'showtitle': true,
  }
})

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
console.log(doc)
export default App;
