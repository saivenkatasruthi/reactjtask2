import React from 'react';
import './App.css';
import Calculator from './Calculator'; // Import the Calculator component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Calculator /> {/* Use the Calculator component */}
      </header>
    </div>
  );
}

export default App;
