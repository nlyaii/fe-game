import React from 'react';
import './App.scss';
import MainLayout from './game/layouts/MainLayout'

const gameState = {
    min: 1,
    max: 3,
    attempts: 3,
    tiles: [
        {id: 1},
        {id: 2},
        {id: 3}
    ]
};

function App() {
  return (
    <div className="app">
      <div className="app-body">
          <MainLayout gameState={gameState}/>
      </div>
    </div>
  );
}

export default App;
