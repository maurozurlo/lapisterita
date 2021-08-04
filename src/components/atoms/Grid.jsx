import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 1.5em 1em;

@media (max-width: ${({ theme }) => theme.mediaSm}) {
    grid-template-columns: 1fr;
    grid-gap: 1em;
}
`

const Grid = ({ content }) => {
    return <Wrapper>
                {content}
            </Wrapper>

}

export default Grid

