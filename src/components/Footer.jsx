import React from 'react';
import styled from 'styled-components';
import { Title } from './atoms'
//import { ReactComponent as BehanceIcon } from '../assets/icons/be.svg';


const Wrapper = styled.footer`
    width: 100%;
    margin: 0 auto;
    padding: 0 1em;
    margin-top: 3em;
    padding-bottom: 3em;
    background-color: ${({ theme }) => theme.navbar};
    width: 100%;
    min-height: 150px;

    small{
        padding: .5em;
        text-align: center;
    }
`

const Social = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    width: 100%;
    max-width: 120px;

    svg{
        width: 50px;
        fill: ${({theme}) => theme.emphasizedText};
    }

    a:hover{
        svg{
            fill: ${({theme}) => theme.highlightLink};
        }

    }
`

const Footer = () => {
    return (
        <Wrapper>
            <Title size='1.5em' content="Seguinos!" />
            <Social>
                {/*<a href='/assets/Mauro Zurlo - CV.pdf' alt='cv'><CVIcon/></a>
                <a href='https://github.com/maurozurlo' alt='Github'><GithubIcon /></a>
                 <a href='https://www.behance.net/maurozurlo' alt='Behance'><BehanceIcon /></a> */}
            </Social>
            <small>Mauro Zurlo - 2021</small>
        </Wrapper>
    )
}

export default Footer;