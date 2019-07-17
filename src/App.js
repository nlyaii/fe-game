import React from 'react';
import './App.scss';
import MainLayout from './game/layouts/MainLayout'

function App() {
  return (
    <div className="app">
      <div className="app-body">
          <MainLayout gameState={{ min: 1,
              max : 3,
              attempts : 3}}/>
      </div>
    </div>
  );
}

export default App;
