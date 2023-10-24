import { FC } from 'react';

import image from '../../assets/image.png';

import { Header } from '../view/Header';

export const App: FC = () => {
  const title = 'Double-State with Memoization';
  return (
    <>
      <Header image={image} attrib="image" title={title} />
    </>
  );
};
