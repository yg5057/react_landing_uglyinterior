import React from 'react';
import styled, { keyframes } from 'styled-components';

import useMediaQuery from '../hooks/useMediaQuery';
import useScrollAnimation from '../hooks/useScrollAnimation';

import TypoH3 from '../components/typographys/TypoH3';
import TypoH6 from '../components/typographys/TypoH6';
import Phone from '../assets/Phone.png';
import Typo from '../assets/typo.png';


const slideUpAnimation = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;
const SectionWrapper = styled.section`
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
  @media (max-width: 768px) {  // mobile
    flex-direction: column;
  }
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
  @media (max-width: 1024px) {  // tablet
    display: none;
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
    height: fit-content;
    object-fit: contain;
   }
  @media (max-width: 1024px) {  // tablet
    width: 80%;
    height: 80%;
    gap: 10rem;
  }
  @media (max-width: 768px) {  // mobile
    width: 100%;
    height: 100%;
    gap: 8rem;
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

const Section02 = () => {
  const sectionRef = useScrollAnimation(slideUpAnimation);
  const isTablet = useMediaQuery('(max-width: 1024px)');
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <SectionWrapper tablet={isTablet} mobile={isMobile}>
      <ContsWrapper>
        <ContsLeft>
          <img src={Phone} />
        </ContsLeft>
        <ContsRight ref={sectionRef}>
          <img src={Typo} />
          {isMobile ? (
            <TypoWrapper>
              <TypoH6 textAlign='center'>혼자서 <Span>끙끙 앓지</Span> 말고</TypoH6>
              <TypoH6 textAlign='center'>차라리 <Span>기쁨으로 승화</Span> 시키자!</TypoH6>
            </TypoWrapper>
          ) : (
            <TypoWrapper>
              <TypoH3 textAlign='center'>혼자서 <Span>끙끙 앓지</Span> 말고</TypoH3>
              <TypoH3 textAlign='center'>차라리 <Span>기쁨으로 승화</Span> 시키자!</TypoH3>
            </TypoWrapper>
          )}
        </ContsRight>
      </ContsWrapper>
    </SectionWrapper>
  );
};

export default Section02;
