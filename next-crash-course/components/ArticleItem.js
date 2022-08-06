import React from 'react';
import articleStyles from '../styles/Articles.module.css';
import Link from 'next/link';

const ArticleItem = ({ article }) => {
  return (
    <Link href={`/article/${article.id}`}>
      <a className={articleStyles.card}>
        <h2>{article.title} &rarr;</h2>
        <p>{article.excerpt}</p>
      </a>
    </Link>
  );
};

export default ArticleItem;
