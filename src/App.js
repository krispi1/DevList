import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import devsList from './models/dataStore.model';
import './components/Devs.component';
import Devs from './components/Devs.component';
import DevForm from './components/AddDev.component';

function App() {
  // console.log(devsList);
  return (
    <div className="App">
    {/*<header className="App-header">
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
      </header> */}
      <Devs />
      <DevForm />
    </div>
  );
}

export default App;
