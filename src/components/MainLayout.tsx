import React from 'react';
import Header02 from './Header02';

type Props = {
  children: React.ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header02 />
      <div>{children}</div>
    </>
  );
};

export default MainLayout;



