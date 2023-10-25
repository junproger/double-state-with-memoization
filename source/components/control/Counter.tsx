import { FC, useState } from 'react';

import styles from './counter.module.css';

import { uidkey } from '../../helpers/uidkey';
import { logging } from '../../utils/logging';

export interface ICounter {
  index: number;
}

export const Counter: FC<ICounter> = ({ index }) => {
  logging('COUNTER is rendered');
  const [getItemCount, setItemCount] = useState(0);
  const btnHandle = (): void => {
    setItemCount((prevVal) => prevVal + 1);
  };
  return (
    <p className={styles['row']}>
      <button value={getItemCount} onClick={btnHandle}>
        {uidkey(index)} Item amount {getItemCount}
      </button>
    </p>
  );
};
