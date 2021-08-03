import logo from "./logo.svg";
import "./App.css";
import NotFound from "./NotFound";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React Testing Library Tutorial 🐙</p>
      </header>
      <NotFound path="/hello" />
    </div>
  );
}

export default App;
