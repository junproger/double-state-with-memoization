import { FC } from 'react';

import * as styles from './show.module.css';

import { logging } from '../../utils/logging';

export type Show = {
  sumitems: { [key: string]: number };
};

export const Show: FC<Show> = ({ sumitems }) => {
  logging('SHOW is rendered');
  const length = Object.keys(sumitems).length;
  return (
    <div className={styles['show']}>
      <p>Sum of count items: {length}</p>
      <p>Sum of total values: {0}</p>
    </div>
  );
};
