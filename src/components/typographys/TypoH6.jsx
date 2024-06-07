import React from 'react';
import styled from 'styled-components';


const StyledText = styled.h6.attrs(props => ({
    style: {
        color: props.color || 'auto',
        fontWeight: props.fontWeight || 'auto',
        textAlign: props.textAlign || 'auto',
    },
}))`
    color: var(--Neutral-Gray-900);
    font-family: var(--font-family-primary);
    font-size: 24px;
    font-style: normal;
    line-height: 32px; 
    word-wrap: break-word;
    word-break: keep-all;
`;

const TypoH6 = ({ children, color, fontWeight, textAlign }) => {

    return (
        <StyledText color={color} fontWeight={fontWeight} textAlign={textAlign}>
            {children}
        </StyledText>
    );
};

export default TypoH6;
