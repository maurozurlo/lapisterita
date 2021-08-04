import React from 'react'
import { func, string } from 'prop-types';
import styled from 'styled-components';
// Import a couple of SVG files we'll use in the design: https://www.flaticon.com
import { ReactComponent as MoonIcon } from '../assets/icons/moon.svg';
import { ReactComponent as SunIcon } from '../assets/icons/sun.svg';

const ToggleContainer = styled.button`
position: relative;
display: flex;
justify-content: space-between;
background: ${({ theme }) => theme.gradient};
width: 8rem;
height: 3.5rem;
border-radius: 30px;
border: 2px solid ${({ theme }) => theme.toggleBorder};
font-size: 0.5rem;
padding: 0.5rem;
overflow: hidden;
cursor: pointer;
transform: scale(.8);

svg {
  max-width: 2.5rem;
  height: auto;
  transition: all 0.3s linear;

  &:first-child {
    transform: ${({ lightTheme }) => lightTheme ? 'translateY(-2px)' : 'translateY(100px)'};
  }

  &:nth-child(2) {
    transform: ${({ lightTheme }) => lightTheme ? 'translateY(-100px)' : 'translateY(-3px)'};
  }
}
`;


const ToggleButton = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';
  return (
    <ToggleContainer lightTheme={isLight} onClick={toggleTheme} >
      <SunIcon />
      <MoonIcon />
    </ToggleContainer>
  );
};

ToggleButton.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default ToggleButton;