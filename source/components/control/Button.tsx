import { FC, ReactNode } from 'react';

import * as styles from './button.module.css';

import { logging } from '../../utils/logging';

export interface IButton {
  callback: () => void;
  btnvalue: number | string;
  children: ReactNode;
}

export const Button: FC<IButton> = ({ callback, btnvalue, children }) => {
  logging('BUTTON is rendered');
  return (
    <button className={styles['button']} onClick={callback}>
      {children} {btnvalue}
    </button>
  );
};
