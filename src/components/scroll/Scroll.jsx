import React from 'react';
import styled, { keyframes } from 'styled-components';



const ScrollWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    color: var(--Selective-Yellow-500);
    font-family: var(--font-family-secondary);
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`
// keyframes 
const scroll1 = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;
const scroll2 = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0)}
`;
const scroll3 = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;

const StyledScroll = styled.div`
  span {
    display: block;
    margin: 0 auto;
    width: 12px;
    height: 12px;
    border-radius: 3px;
    background: linear-gradient(0deg, #FFB700, #FFB700), 
                linear-gradient(0deg, #FFB700, #FFB700);
  }
  span:nth-child(1) {
    opacity: 0.1;
    margin-bottom: -4px;
    animation: ${scroll2} 1.5s ease-in-out infinite;
  }
  span:nth-child(2) {
    opacity: 0.5;
    margin-bottom: -4px;
    animation: ${scroll1} 1.5s ease-in-out infinite;
  }
  span:nth-child(3) {
    opacity: 0.8;
    margin-bottom: -4px;
    animation: ${scroll3} 1.5s ease-in-out infinite;
  }
`;

const Scroll = () => {
  return (
    <ScrollWrapper>
        <strong>SCROLL</strong>
    <StyledScroll>
      <span></span>
      <span></span>
      <span></span>
    </StyledScroll>
    </ScrollWrapper>
  );
};

export default Scroll;
