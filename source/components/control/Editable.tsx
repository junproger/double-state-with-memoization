import { FC, memo } from 'react';

import * as styles from './editable.module.css';

import { uidkey } from '../../helpers/uidkey';
import { range } from '../../helpers/range';

import { logging } from '../../utils/logging';

import { Counter } from './Counter';

export interface IEditable {
  quantity: number;
  selected: (uid: string) => void;
  summator: () => void;
}

const EditableMemo: FC<IEditable> = ({ quantity, selected, summator }) => {
  logging('EDITABLE is rendered');
  return (
    <div className={styles['block']}>
      {range(quantity).map((index) => (
        <Counter key={uidkey(index)} index={index} selected={selected} summator={summator} />
      ))}
    </div>
  );
};

export const Editable = memo(EditableMemo);
