import React from 'react';
import styled from 'styled-components';


const StyledCardWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 56.8rem;
  max-height: 60.1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 15px;
  background: var(--White);
  box-shadow: var(--DropShadow-OnDark-XXL);
  @media (max-width: 768px) {  // mobile
    width: 100%;
  }
`;
const StyledCardTop = styled.div`
  display: flex;
  width: 100%;
  max-height: 15rem;
  padding: 4rem 6rem 1rem 6rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  flex-shrink: 0;
  @media (max-width: 768px) {  // mobile
    width: 100%;
    max-width: 35rem;
    padding: 2rem 3rem;
  }
`;
const StyledCardBtm = styled.div`
  display: flex;
  width: 100%;
  max-height: 45.1rem;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  flex-shrink: 0;
  @media (max-width: 768px) {  // mobile
    width: 100%;
    max-width: 35rem;
    max-height: 27.8rem;
  }
`;

const Image = styled.img`
  width: auto;
  height: auto;
    @media (max-width: 768px) {  // mobile
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;


const CardLarge = ({ children, image }) => {
  return (
    <StyledCardWrapper>
      <StyledCardTop>
        {children}
      </StyledCardTop>
      <StyledCardBtm>
        <Image src={image} alt="Card Image" />
      </StyledCardBtm>
    </StyledCardWrapper>
  );
};

export default CardLarge;
