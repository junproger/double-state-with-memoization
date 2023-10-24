import { FC } from 'react';

import * as styles from './editable.module.css';

import { uidkey } from '../../helpers/uidkey';

import { logging } from '../../utils/logging';

export interface IEditable {
  quantity: number;
}

export const Editable: FC<IEditable> = ({ quantity }) => {
  logging('EDITABLE is rendered');
  return (
    <div className={styles['block']}>
      {[...Array(quantity).keys()].map((index) => (
        <p key={uidkey(index)}>Counter</p>
      ))}
    </div>
  );
};
