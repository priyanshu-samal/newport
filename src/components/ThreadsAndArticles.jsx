import React from 'react';
import './ThreadsAndArticles.scss';
import { FaXTwitter } from 'react-icons/fa6';

const articles = [
    {
    platform: 'X',
    icon: <FaXTwitter />,
    title: "A thread on why Socket.io's developer documentation is a \"cheat code.\"",
    url: 'https://x.com/PriyanshuS92042/status/1982659945536569699',
  },
  {
    platform: 'X',
    icon: <FaXTwitter />,
    title: "A thread on why Postman's developer documentation is a \"cheat code.\"",
    url: 'https://x.com/PriyanshuS92042/status/1981626321857052970',
  },
  {
    platform: 'X',
    icon: <FaXTwitter />,
    title: 'A thread exposing fake job posts on LinkedIn used to gain followers.',
    url: 'https://x.com/PriyanshuS92042/status/1980857078727237791',
  },
  {
    platform: 'X',
    icon: <FaXTwitter />,
    title: 'A thread about how interview “assignments” can become unpaid R&D.',
    url: 'https://x.com/PriyanshuS92042/status/1977604021130236160',
  },
];

const ThreadsAndArticles = () => {
  return (
    <div className="threads-and-articles">
      {articles.map((article, index) => (
        <a key={index} href={article.url} target="_blank" rel="noopener noreferrer" className="article-card">
          <div className="article-icon">{article.icon}</div>
          <div className="article-content">
            <p className="article-title">{article.title}</p>
            <span className="article-link">View on {article.platform}</span>
          </div>
        </a>
      ))}
    </div>
  );
};

export default ThreadsAndArticles;
