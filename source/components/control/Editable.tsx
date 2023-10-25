import { FC, memo } from 'react';

import * as styles from './editable.module.css';

import { uidkey } from '../../helpers/uidkey';

import { logging } from '../../utils/logging';

import { Counter } from './Counter';

export interface IEditable {
  quantity: number;
  selected: (uid: string) => void;
}

const memoEditable: FC<IEditable> = ({ quantity, selected }) => {
  logging('EDITABLE is rendered');
  return (
    <div className={styles['block']}>
      {[...Array(quantity).keys()].map((index) => (
        <Counter key={uidkey(index)} index={index} selected={selected} />
      ))}
    </div>
  );
};

export const Editable = memo(memoEditable);
