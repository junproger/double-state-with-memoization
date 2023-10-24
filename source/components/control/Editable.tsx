import { FC } from 'react';

import * as styles from './editable.module.css';

import { uidkey } from '../../helpers/uidkey';

export interface IEditable {
  quantity: number;
}

export const Editable: FC<IEditable> = ({ quantity }) => {
  return (
    <div className={styles['block']}>
      {[...Array(quantity).keys()].map((index) => (
        <p key={uidkey(index)}>Counter</p>
      ))}
    </div>
  );
};
