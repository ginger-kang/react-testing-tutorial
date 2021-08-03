import logo from "./logo.svg";
import "./App.css";
import NotFound from "./NotFound";
import LoginForm from "./LoginForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React Testing Library Tutorial 🐙</p>
      </header>
      <LoginForm />
      <hr />
      <NotFound path="/hello" />
    </div>
  );
}

export default App;
