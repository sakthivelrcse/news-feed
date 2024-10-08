import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './NewsFeed.css';

const NewsFeed = () => {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('technology');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);
      
      const cacheKey = `news_${category}`;
      const cachedData = localStorage.getItem(cacheKey);

      if (cachedData) {
        setArticles(JSON.parse(cachedData));
        setLoading(false);
      } else {
        try {
          const response = await axios.get(
            `https://newsdata.io/api/1/news?apikey=pub_51586e2b849801bf7ef6700e79f1311107c68&q=news&country=in&language=en&category=${category}`
          );
          setArticles(response.data.results);
          localStorage.setItem(cacheKey, JSON.stringify(response.data.results));
          setLoading(false);
        } catch (error) {
          if (error.response && error.response.status === 429) {
            console.warn('Too many requests. Please try again later.');
          } else {
            setError('Error fetching the news');
          }
          setLoading(false);
        }
      }
    };

    fetchNews();
  }, [category]);

  return (
    <div className="news-feed">
      <div className="category-select">
        <label htmlFor="category">Choose a category: </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="business">Business</option>
          <option value="politics">Politics</option>
          <option value="sports">Sports</option>
          <option value="entertainment">Entertainment</option>
          <option value="technology">Technology</option>
        </select>
      </div>
      
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      
      <div className="news-container">
        {articles.map((article, index) => (
          <div className="news-card" key={index}>
            <img src={article.image_url} alt={article.title} /> {/* Adjust if needed based on API response */}
            <h3>{article.title}</h3>
            <a href={article.link} target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsFeed;
