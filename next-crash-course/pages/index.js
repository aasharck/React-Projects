import ArticlesList from '../components/ArticlesList';
import { server } from '../config';

export default function Home({ articles }) {
  return (
    <div>
        <ArticlesList articles={articles} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    `${server}/api/articles`
  );
  const articles = await res.json();
  return {
    props: {
      articles,
    },
  };
};
