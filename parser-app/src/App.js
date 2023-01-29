import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1>Upload Resume: </h1>
      <input type="file" name="file" onChange={(e) => this.upload(e)} />      </header>
    </div>
  );
}

export default App;
