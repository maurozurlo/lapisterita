import React from 'react';
import { NavLink } from "react-router-dom";
import ToggleButton from './ToggleButton'
import styled from 'styled-components';
import { ReactComponent as Logo } from '../assets/logo.svg';
import { ReactComponent as DLogo } from '../assets/dlogo.svg';

const routes = [
      {title: 'Home', href: '/'},
       {title: 'Pistearla', href: '/cosas'},
    //   {title: 'Contact', href: '/#contact'},
    //   {title: 'Other stuff', href: '/#bio'},
]

const Wrapper = styled.nav`
    position: fixed;
    background-color: ${({ theme }) => theme.navbar};
    width: 100%;
    z-index: 99;
    box-shadow: -1px 3px 10px ${({ theme }) => theme.softShadow};

    &>div{
        max-width: 960px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`

const LinkList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;

    li{
        display: inline;
    }

    li a{
        color: ${({ theme }) => theme.navbarText};
        font-weight: 700;
        text-decoration: none;
        padding: 14px 16px;
    }

    li a:hover {
        color: ${({ theme }) => theme.navbarTextHover};
      }
`

const LogoContainer = styled.div`
      display:flex;
      max-width:250px;
      align-items: center;
      justify-content: center;

    svg{
        height: 60px;
        padding: .5em;
    }

    h3{
        color: ${({ theme }) => theme.navbarText};
    }
`

const HideOnMobile = styled.span`
    @media (max-width: ${({ theme }) => theme.mediaMd}) {
        display: none;
    }
`


const Navigation = ({ theme, toggleTheme }) => {
    return (
        <Wrapper>
            <div>
                <LogoContainer>
                    {theme === 'light' ? <Logo /> : <DLogo />}
                </LogoContainer>

                <HideOnMobile>
                    <LinkList>
                        {routes.map(link => <li key={link.title}><NavLink to={link.href}>{link.title}</NavLink></li>)}
                    </LinkList>
                </HideOnMobile>
                {/* <HideOnMobile> */}
                <ToggleButton theme={theme} toggleTheme={toggleTheme} />
                {/* </HideOnMobile> */}
            </div>
        </Wrapper>
    )
}

export default Navigation;