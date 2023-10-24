import { FC } from 'react';

import image from '../../assets/image.png';

import { Header } from '../view/Header';
import { Main } from '../view/Main';

export const App: FC = () => {
  const title = 'Double-State with Memoization';
  return (
    <>
      <Header image={image} attrib="image" title={title} />
      <Main />
    </>
  );
};
