import React from 'react';
import './News.css';
import news1 from '../../assets/news-1.jpg';
import news2 from '../../assets/news-2.jpg';
import news3 from '../../assets/news-3.jpg';

const News = () => {
  return (
    <div className="news-section">
      <h3 className="news-subtitle">News</h3>
      <h1 className="news-title">Latest News</h1>
      <div className="news-row">
        <div className="news-card">
          <img src={news1} className="news-image" alt="Spain Appetizer" />
          <div className="news-card-body">
            <h5 className="news-card-title">Spain Appetizer</h5>
            <p className="news-card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <h6 className="news-read-more">Read More</h6>
          </div>
        </div>

        <div className="news-card">
          <img src={news2} className="news-image" alt="Wine and Cheese" />
          <div className="news-card-body">
            <h5 className="news-card-title">Wine and Cheese</h5>
            <p className="news-card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <h6 className="news-read-more">Read More</h6>
          </div>
        </div>

        <div className="news-card">
          <img src={news3} className="news-image" alt="Cup of Coffee" />
          <div className="news-card-body">
            <h5 className="news-card-title">Cup of Coffee</h5>
            <p className="news-card-text">
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <h6 className="news-read-more">Read More</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
