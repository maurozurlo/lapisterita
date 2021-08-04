import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.button`
    margin: 0;
    margin-bottom:.5em;
    font-weight: 600;
    display: inline-block;
    padding: .75em 3.5em;
    min-width: 300px;
    border-radius: ${({theme}) => theme.borderRadius};
    text-decoration: none;
    font-size: 1rem;
    line-height: 1;
    cursor: pointer;
    text-align: center;
    transition: all .15s ease-in-out;
    -webkit-appearance: none;
    -moz-appearance: none;
    color: ${({ hierarchy, theme }) => {
    switch (hierarchy) {
      case 'primary': return theme.primaryButtonText
      case 'secondary': return theme.secondaryButtonText
      case 'outline': return theme.outlineButtonText
      default: return theme.primaryButtonText
    }
  }};
    background-color: ${({ hierarchy, theme }) => {
    switch (hierarchy) {
      case 'primary': return theme.primaryButton
      case 'secondary': return theme.secondaryButton
      case 'outline': return 'transparent'
      default: return theme.primaryButton
    }
  }};
    border: 2px solid ${({ hierarchy, theme }) => {
    switch (hierarchy) {
      case 'primary': return theme.primaryButton
      case 'secondary': return theme.secondaryButton
      case 'outline': return theme.outlineButton
      default: return theme.primaryButton
    }
  }};

    &:hover{
      background-color: ${({ hierarchy, theme }) => {
    switch (hierarchy) {
      case 'primary': return theme.primaryButtonHover
      case 'secondary': return theme.secondaryButtonHover
      case 'outline': return theme.outlineButton
      default: return theme.primaryButtonHover
    }
  }};
    border-color: ${({ hierarchy, theme }) => {
    switch (hierarchy) {
      case 'primary': return theme.primaryButtonHover
      case 'secondary': return theme.secondaryButtonHover
      case 'outline': return theme.outlineButton
      default: return theme.primaryButtonHover
    }
  }};
    color: ${({ hierarchy, theme }) => hierarchy === 'outline' ? theme.outlineButtonHover : ''};
  }
`

const Button = ({ text, fn, hierarchy }) => {
  return <Wrapper hierarchy={hierarchy} onClick={fn}>
    {text}
  </Wrapper>

}

export default Button
