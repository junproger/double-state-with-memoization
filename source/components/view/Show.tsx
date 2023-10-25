import { FC } from 'react';

import * as styles from './show.module.css';

import { logging } from '../../utils/logging';

export type Show = {
  sumitems: number;
};

export const Show: FC<Show> = ({ sumitems }) => {
  logging('SHOW is rendered');
  return (
    <div className={styles['show']}>
      <p>Sum of count items: {sumitems}</p>
      <p>Sum of total values: {0}</p>
    </div>
  );
};
