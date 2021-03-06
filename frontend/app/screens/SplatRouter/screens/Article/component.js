// @flow

import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';
import Html from 'Html';
import styles from './styles.css';

type ArticleProps = {
  title: string,
  body: {
    text: string,
  },
};

const Article = ({ title, body }: ArticleProps): React$Element<any> =>
  (<div className={styles.Wrapper}>
    <Helmet title={title} />
    <h1>
      {title}
    </h1>
    <Html>
      {body && body.text}
    </Html>
    <Link to="/articles">Back to overview</Link>
  </div>);

export default Article;
