import Link from 'next/link';
import React from 'react';
import Meta from '../../../components/Meta';
import { server } from '../../../config';
import EachArticleStyles from '../../../styles/EachArticle.module.css'

const article = ({ article }) => {
  return (
    <>
    <Meta title={article.title}/>
    <div className={EachArticleStyles.container}>
        <h2>{article.title}</h2>
        <p>{article.body}</p>
        <br />
        <Link href='/'>Go Back</Link>
    </div>
    </>
    
  )
};
export const getStaticProps = async (context) => {
  const res = await fetch(
    `${server}/api/articles/${context.params.id}`
  );
  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();
  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths: paths,
    fallback: false,
  };
};
export default article;
