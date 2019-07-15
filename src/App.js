import React from 'react';
import './assets/styles/App.scss';
import MainLayout from './game/layouts/MainLayout'

function App() {
  return (
    <div className="app">
      <div className="app-body">
          <MainLayout/>
      </div>
    </div>
  );
}

export default App;
