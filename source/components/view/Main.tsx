import { FC, useCallback, useState } from 'react';

import * as styles from './main.module.css';

import { logging } from '../../utils/logging';
import { objlen } from '../../helpers/objlen';

import { counters } from '../../constants/counters';

import { Show } from './Show';

import { Editable } from '../control/Editable';

export const Main: FC = () => {
  logging('MAIN is rendered');
  const [getSumItems, setSumItems] = useState<{ [key: string]: number }>({});
  const selected = useCallback(
    (uid: string): void =>
      setSumItems((prevVal) => {
        return {
          ...prevVal,
          [uid]: 1,
        };
      }),
    []
  );
  return (
    <main className={styles['main']}>
      <Show sumitems={objlen(getSumItems)} />
      <Editable quantity={counters} selected={selected} />
    </main>
  );
};
