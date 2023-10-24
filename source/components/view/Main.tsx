import { FC } from 'react';

import * as styles from './main.module.css';

import { Show } from './Show';

import { Editable } from '../control/Editable';

export const Main: FC = () => {
  const numCounters = 8;
  return (
    <main className={styles['main']}>
      <Show />
      <Editable quantity={numCounters} />
    </main>
  );
};
