import React from 'react';
import styled, { keyframes } from 'styled-components';

import useMediaQuery from '../hooks/useMediaQuery';
import useScrollAnimation from '../hooks/useScrollAnimation';

import CardLarge from '../components/cards/CardLarge';
import TypoH3 from '../components/typographys/TypoH3';
import TypoH4 from '../components/typographys/TypoH4';
import TypoH6 from '../components/typographys/TypoH6';
import ParagraphS from '../components/typographys/ParagraphS';

import Coupon from '../assets/coupon.png';


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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10rem;
  flex-shrink: 0;
  @media (max-width: 1024px) {  // tablet
    padding: 6rem;
    gap: 8rem;
  }
  @media (max-width: 768px) {  // mobile
    padding: 6rem;
    gap: 5rem;
  }
`;
const ContsTop = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
`;
const ContsBtm = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
`;
const CardTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    flex-shrink: 0;
  `
const Span = styled.span`
    color: var(--Selective-Yellow-500);
  `;


const Section03 = () => {
  const sectionRef = useScrollAnimation(slideUpAnimation);
  const isTablet = useMediaQuery('(max-width: 1024px)');
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <SectionWrapper tablet={isTablet} mobile={isMobile}>
      <ContsWrapper>
        <ContsTop>
          {isMobile ? (
            <TypoH6 fontWeight='600' textAlign='center'>당신의 <Span>웃픈 인테리어 사진</Span>을 기다립니다!</TypoH6>
          ) : isTablet ? (
            <TypoH4 fontWeight='600' textAlign='center'>당신의 <Span>웃픈 인테리어 사진</Span>을 기다립니다!</TypoH4>
          ) : (
            <TypoH3 fontWeight='600' textAlign='center'>당신의 <Span>웃픈 인테리어 사진</Span>을 기다립니다!</TypoH3>
          )}
        </ContsTop>
        <ContsBtm ref={sectionRef}>
          <CardLarge image={Coupon}>
            <CardTitle>
              <TypoH6 color='var(--Selective-Yellow-500)' fontWeight='700'>리워드 받기</TypoH6>
              <ParagraphS color='var(--Neutral-Gray-400)' fontWeight='600'>매월 5분을 추첨해서 롯데 상품권을 드립니다!<br />많은 참여 부탁드립니다!</ParagraphS>
            </CardTitle>
          </CardLarge>
        </ContsBtm>
      </ContsWrapper>
    </SectionWrapper>
  );
};

export default Section03;
