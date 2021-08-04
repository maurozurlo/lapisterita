import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    grid-column: ${({ isTextarea }) => isTextarea ? '1/3' : 'auto'};

    @media (max-width: ${({ theme }) => theme.mediaSm}) {
        padding: 5px 0;
        grid-column: 1/3;
    }

    input, textarea{
        border:${({ theme, showErrors }) => showErrors ? `2px solid ${theme.error}` : `2px solid ${theme.bg50}`} ;
        color: ${({ theme }) => theme.text};
        background-image:none;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
        background-color:${({ theme }) => theme.bg50};
        padding: 1em;
        border-radius: ${({ theme }) => theme.borderRadius};
        font-family: 'Poppins';
        transition: all .5s ease;
    }

    input:hover,textarea:hover, input:focus, textarea:focus{
        border-color: ${({ theme }) => theme.text};
    }
`

const Label = styled.label`
    margin-bottom:.5em;
    font-weight: 600;
    color: ${({ theme }) => theme.title2};
`

const Error = styled.small`
    display: ${({ showErrors }) => showErrors ? 'block' : 'none'};
    color: ${({ theme }) => theme.error};
    font-weight: 600;

    @media (max-width: ${({ theme }) => theme.mediaSm}) {
        font-size: 10px;
    }
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Input = ({ title, placeholder, fn, errors, isInput, isTextarea }) => {
    return <Wrapper showErrors={Boolean(errors)} isTextarea={Boolean(isTextarea)}>
        <Header><Label htmlFor={title}>{title}</Label><Error showErrors={Boolean(errors)}>{errors}</Error></Header>
        {isInput && <input id={title} type="text" placeholder={placeholder} onChange={fn} />}
        {isTextarea && <textarea id={title} placeholder={placeholder} onChange={fn} rows={3} />}
    </Wrapper>

}

export default Input
