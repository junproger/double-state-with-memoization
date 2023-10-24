import { FC } from 'react';

import * as styles from './header.module.css';

export type Header = {
  image: string;
  attrib: string;
  title: string;
};

export const Header: FC<Header> = (props: Header) => {
  const { image, attrib, title } = props;
  return (
    <header className={styles['header']}>
      <h1 className={styles['title']}>
        <img src={image} className={styles['image']} alt={attrib} />
        <span className={styles['text']}>{title}</span>
      </h1>
    </header>
  );
};
