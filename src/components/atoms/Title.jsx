import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 1em 0;
    text-align: center;

    h1{
        color:${({ theme }) => theme.title};
        font-weight: 700;
    }
`

const Title = ({ content, size }) => {
    return <Wrapper>
        <h1 style={{ fontSize: size }}>{content}</h1>
    </Wrapper>

}

export default Title
