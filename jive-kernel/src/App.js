import React from 'react';
import './App.css';
import KernelEntries from './KernelEntries';

const items = [...Array(100)].map((val, i) => `Item ${i}`);

function App() {
  return (
    <div className="App">
      <div className="top-container">
        <div className="top-left-col">
          <h2>NAV COMPONENT</h2>
        </div>
        <div className="top-right-col">
          USER COMPONENT
        </div>
      </div>
      <h1>JIVEKERNEL</h1>
      <div className="container">
        <div className="left-col">
          TBD COMPONENT
        </div>
        
        <div className="right-col">
          <KernelEntries />
        </div>
      </div>
    </div>
  );
}

export default App;
