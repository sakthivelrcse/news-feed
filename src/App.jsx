// src/App.jsx
import React from 'react';
import NewsFeed from './components/NewsFeed';
import Timer from './components/Timer';
import './App.css';
import bannerImage from './assets/po.jpg';

const App = () => {
  return (
    <div className="App">
      <div className="banner">
        <img src={bannerImage} alt="News Banner" />
      </div>
      <h1>Personalized News Feed</h1>
      <div className="timer-container">
        <Timer />
      </div>
      <NewsFeed />
    </div>
  );
};

export default App;
