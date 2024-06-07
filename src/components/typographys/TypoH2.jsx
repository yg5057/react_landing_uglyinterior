import React from 'react';
import styled from 'styled-components';


const StyledText = styled.h2.attrs(props => ({
    style: {
        color: props.color || 'auto',
        fontWeight: props.fontWeight || 'auto',
        textAlign: props.textAlign || 'auto',
    },
}))`
    color: var(--Neutral-Gray-900);
    font-family: var(--font-family-primary);
    font-size: 60px;
    font-style: normal;
    line-height: 72px; 
    word-wrap: break-word;
    word-break: keep-all;
`;

const TypoH2 = ({ children, color, fontWeight, textAlign }) => {

    return (
        <StyledText color={color} fontWeight={fontWeight} textAlign={textAlign}>
            {children}
        </StyledText>
    );
};

export default TypoH2;
