import { FC, useState } from 'react';

import styles from './counter.module.css';

import { uidkey } from '../../helpers/uidkey';
import { logging } from '../../utils/logging';

import { Button } from './Button';

export interface ICounter {
  index: number;
  selected: (uid: string) => void;
  summator: () => void;
}

export const Counter: FC<ICounter> = ({ index, selected, summator }) => {
  logging('COUNTER is rendered');
  const [getItemCount, setItemCount] = useState(0);
  const btnHandle = (): void => {
    setItemCount((prevVal) => prevVal + 1);
    selected(uidkey(index));
    summator();
  };
  return (
    <p className={styles['row']}>
      <Button callback={btnHandle} btnvalue={getItemCount}>
        {uidkey(index)}. Item amount:
      </Button>
    </p>
  );
};
