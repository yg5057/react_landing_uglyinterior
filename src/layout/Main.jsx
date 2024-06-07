import React from 'react';
import styled from 'styled-components';

const MainContent = styled.main`
  width: 100vw;
  min-height: 100vh;
  overflow-y: auto;
  background: var(--BG-SkyBlue);
  backdrop-filter: blur(2px);
`;

const MainLayout = ({ children }) => {
  return (
    <section>
      <MainContent>{children}</MainContent>
    </section>
  );
};

export default MainLayout;
