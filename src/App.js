import logo from './logo.svg';
import './App.css';
import ComponentDoug from './ComponentDoug';
import Header from './Header';

function App() {
  return (
    <div className="App">
        <Header />
        <img src={logo} className="App-logo" alt="logo" />
        <ComponentDoug />
    </div>
  );
}

export default App;
