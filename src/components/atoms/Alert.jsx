import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    background: #ffeba76e;
    color:${({ theme }) => theme.alertFill};
    fill:${({ theme }) => theme.alertFill};
    padding: .5em;
    gap: 10px;
    border-radius: 10px;
    h2{
        margin: 0;
        font-size: 1em;
        font-weight: 500;
    }
`

export default function Alert({text}) {
  return (
    <Wrapper>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.31 7.526c-.099-.807.528-1.526 1.348-1.526.771 0 1.377.676 1.28 1.451l-.757 6.053c-.035.283-.276.496-.561.496s-.526-.213-.562-.496l-.748-5.978zm1.31 10.724c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z"/></svg>
            <h2>Sorry for any inconveniences, this is still under construction!</h2>
        </Wrapper>
  )
}
