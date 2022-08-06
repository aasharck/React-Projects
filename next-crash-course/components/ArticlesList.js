import React from 'react';
import articleStyles from '../styles/Articles.module.css';
import ArticleItem from './ArticleItem';

const ArticlesList = ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article) => (
          <ArticleItem key={article.id} article={article} />
      ))}
    </div>
  );
};

export default ArticlesList;
