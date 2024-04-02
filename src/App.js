import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App container">
      <header className="App-header">
        <h1 className="mt-5">Dictionary</h1>
        <Dictionary defaultWord="Hire" />
      </header>
    </div>
  );
}

export default App;
