import { FC } from 'react';

import * as styles from './main.module.css';

export const Main: FC = () => {
  return (
    <main className={styles['main']}>
      <p>Main Component</p>
    </main>
  );
};
