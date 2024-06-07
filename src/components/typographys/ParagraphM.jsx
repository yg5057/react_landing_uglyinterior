import React from 'react';
import styled from 'styled-components';


const StyledText = styled.p.attrs(props => ({
    style: {
        color: props.color || 'auto',
        fontWeight: props.fontWeight || 'auto',
        textAlign: props.textAlign || 'auto',
    },
}))`
    color: var(--Neutral-Gray-900, #141C24);
    font-family: var(--font-family-primary);
    font-size: 16px;
    font-style: normal;
    line-height: 24px; 
    word-wrap: break-word;
    word-break: keep-all;
`;

const ParagraphM = ({ children, color, fontWeight, textAlign }) => {

    return (
        <StyledText color={color} fontWeight={fontWeight} textAlign={textAlign}>
            {children}
        </StyledText>
    );
};

export default ParagraphM;
