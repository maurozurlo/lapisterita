import React from 'react';
import styled from 'styled-components';
import { Title, Grid, Input, Button } from './atoms'
import { getRandomInt } from '../utils/helpers'

const Wrapper = styled.div`

p{
    color:${({ theme }) => theme.text};
    font-weight: 700;
    margin: 0;
    margin-bottom: .5em;
}
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2em 0;
`

const randomBand = () => {
    const bands = [
        'Weezer',
        'Radiohead',
        'Thom Yorke',
        'Hank Williams',
        'Lana del Rey',
        'The Residents',
        'Boards of Canada',
        'Aphex Twin'
    ]
    return bands[getRandomInt(0, bands.length)]
}

const randomReason = () => {
    const reasons = [
        'ask me about loom',
        'share cupcake recipes',
        `share your thoughts on ${randomBand()} albums`
    ]
    return reasons[getRandomInt(0, reasons.length)]
}

const ContactForm = () => {
    return <Wrapper id='contact'>
        <Title content="Contact" />
        <form action="">
            <p>If you feel like I'd be a good fit for your project or if you want to {randomReason()}, don't hesitate to drop me a line!</p>
            <Grid content={
                <>
                    <Input isInput title='Name' placeholder='i.e. Not-A-Bot-3000' />
                    <Input isInput title='Email' placeholder='i.e. bot@spam.com' />
                    <Input isTextarea title='Message' placeholder='Hi z, make me an Facebook' />
                </>
            } />
            <ButtonContainer>
                <Button text='Send' hierarchy='primary' />
                <small>Message sent!</small>
            </ButtonContainer>
        </form>
    </Wrapper>

}

export default ContactForm