import { FC } from 'react';

import * as styles from './show.module.css';

import { logging } from '../../utils/logging';

export const Show: FC = () => {
  logging('SHOW is rendered');
  return (
    <div className={styles['show']}>
      <p>Sum of count items: {0}</p>
      <p>Sum of total values: {0}</p>
    </div>
  );
};
