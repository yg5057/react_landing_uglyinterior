import React from 'react';
import styled, { keyframes } from 'styled-components';

import Scroll from '../components/scroll/Scroll';

import UglyInterior from '../assets/ugly_interior_contest1.png';



const SectionWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;
const ContsWrapper = styled.article`
  width: 100%;
  height: 100%;
  max-width: 144rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
    img {
      width: 100%;
      height: 90%;
      object-fit: contain;
    }

`;
const ScrollWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Section01 = () => {

  return (
    <SectionWrapper>
      <ContsWrapper>
        <img src={UglyInterior} alt='Ugly Interior Contest Poster' />
        <ScrollWrapper>
          <Scroll>SCROLL</Scroll>
        </ScrollWrapper>
      </ContsWrapper>
    </SectionWrapper>
  );
};

export default Section01;