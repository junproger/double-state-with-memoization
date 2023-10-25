import { FC, useState } from 'react';

import styles from './counter.module.css';

import { uidkey } from '../../helpers/uidkey';
import { logging } from '../../utils/logging';

export interface ICounter {
  index: number;
  selected: (uid: string) => void;
}

export const Counter: FC<ICounter> = ({ index, selected }) => {
  logging('COUNTER is rendered');
  const [getItemCount, setItemCount] = useState(0);
  const btnHandle = (): void => {
    setItemCount((prevVal) => prevVal + 1);
    selected(uidkey(index));
  };
  return (
    <p className={styles['row']}>
      <button value={getItemCount} onClick={btnHandle}>
        {uidkey(index)} Item amount {getItemCount}
      </button>
    </p>
  );
};
