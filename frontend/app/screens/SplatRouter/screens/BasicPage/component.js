// @flow

import React from 'react';
import Helmet from 'react-helmet';
import Html from 'Html';
import styles from './styles.css';

type BasicPageProps = {
  title: string,
  body: {
    text: string,
  },
};

const BasicPage = ({ title, body }: BasicPageProps): React$Element<any> =>
  (<div className={styles.Wraper}>
    <Helmet title={title} />
    <h1>
      {title}
    </h1>
    <Html>
      {body && body.text}
    </Html>
  </div>);

export default BasicPage;
