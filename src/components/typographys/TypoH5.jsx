import React from 'react';
import styled from 'styled-components';


const StyledText = styled.h5.attrs(props => ({
    style: {
        color: props.color || 'auto',
        fontWeight: props.fontWeight || 'auto',
        textAlign: props.textAlign || 'auto',
    },
}))`
    color: var(--Neutral-Gray-900);
    font-family: var(--font-family-primary);
    font-size: 28px;
    font-style: normal;
    line-height: 36px; 
    word-wrap: break-word;
    word-break: keep-all;
`;

const TypoH5 = ({ children, color, fontWeight, textAlign }) => {

    return (
        <StyledText color={color} fontWeight={fontWeight} textAlign={textAlign}>
            {children}
        </StyledText>
    );
};

export default TypoH5;
