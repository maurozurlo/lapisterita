import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
    width: 100%;
    max-width:  ${({ theme }) => theme.mediaLg};
    margin: 0 auto;
    padding: 0 1em;
    padding-top: 6em;

    hr{
        margin: 3em 0;
        border-color: ${({ theme }) => theme.bg20};
    }
`

const Section = ({ content }) => {
    return <Wrapper>
                {content}
            </Wrapper>

}

export default Section



