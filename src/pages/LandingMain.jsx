import React from 'react';
import styled from 'styled-components';

import Section01 from '../contents/Section01';
import Section02 from '../contents/Section02';
import Section03 from '../contents/Section03';
import Section04 from '../contents/Section04';

const LandingWrapper = styled.section`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LandingMain = () => {
  return (
    <LandingWrapper>
      <Section01 />
      <Section02 />
      <Section03 />
      <Section04 />
    </LandingWrapper>
  );
};

export default LandingMain;
