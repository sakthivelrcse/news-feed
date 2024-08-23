
import React from 'react';
import NewsFeed from './components/NewsFeed';
import './App.css';
import bannerImage from './assets/po.jpg';
const App = () => {
  return (
    <div className="App">
      <div className="banner">
        <img src={bannerImage} alt="News Banner" />
      </div>
      <h1>Personalized News Feed</h1>
      <NewsFeed />
    </div>
  );
};

export default App;
