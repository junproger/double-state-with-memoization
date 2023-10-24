import { FC } from 'react';

import * as styles from './show.module.css';

export const Show: FC = () => {
  return (
    <div className={styles['show']}>
      <p>Sum of count items: {0}</p>
      <p>Sum of total values: {0}</p>
    </div>
  );
};
