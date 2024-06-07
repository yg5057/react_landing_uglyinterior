import React from 'react';
import styled, { keyframes } from 'styled-components';

import useMediaQuery from '../hooks/useMediaQuery';
import useScrollAnimation from '../hooks/useScrollAnimation';

import TypoH3 from '../components/typographys/TypoH3';
import TypoH6 from '../components/typographys/TypoH6';
import Subtitle from '../components/typographys/Subtitle';
import ParagraphS from '../components/typographys/ParagraphS';
import Caption from '../components/typographys/Caption';

import Phone from '../assets/Phone.png';
import Typo from '../assets/typo.png';



const SectionWrapper = styled.section`
  padding: 2rem;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--BG-White);
`;
const ContsWrapper = styled.section`
  width: 100%;
  height: 100%;
  max-width: 144rem;
  padding: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-shrink: 0;
`;
const ContsLeft = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
   img {
    width: 100%;
    height: 100%;
    object-fit: contain;
   }
`;
const ContsRight = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10rem;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
   }
`;
const TypoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
const Span = styled.span`
  color: var(--Selective-Yellow-500);
`;


const Section03 = () => {
  const isTablet = useMediaQuery('(max-width: 1024px)');
  const isMobile = useMediaQuery('(max-width: 768px)');


  return (
    <SectionWrapper tablet={isTablet} mobile={isMobile}>
      <ContsWrapper>
        <ContsLeft>
          <img src={Phone} />
        </ContsLeft>
        <ContsRight>
          <img src={Typo} />
          <TypoWrapper>
            <TypoH3>혼자서 끙끙 앓지 말고</TypoH3> 
            <TypoH3>차라리 기쁨으로 승화 시키자!</TypoH3>
          </TypoWrapper>
        </ContsRight>
      </ContsWrapper>
    </SectionWrapper>
  );
};

export default Section03;
