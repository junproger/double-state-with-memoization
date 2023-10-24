import { FC } from 'react';

import * as styles from './main.module.css';

import { Show } from './Show';

export const Main: FC = () => {
  return (
    <main className={styles['main']}>
      <Show />
    </main>
  );
};
