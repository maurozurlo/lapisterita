import React, {useRef} from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  max-width: 250px;
  background-image: linear-gradient(135deg, #D3D3D3 0%, rgba(255,255,255,0.50) 100%);
  background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  border-radius: ${({ theme }) => theme.borderRadius};
  overflow: hidden;
  padding: 0;


  img {
      width: 100%;
      visibility: hidden;
      height: auto;
      transition: all .25s ease;

      &:hover{
        filter: blur(10px);
      }
  }

  div{
    display: block;
    width: 100%;
    height: 100%;
}
`





export default function Card({ event }) {
  const containerEl = useRef(null)
  const imgEl = useRef(null)

  const getSpanEstimate = (size) => (size > 250) ? 2 : 1

  function addStyle(image) {
    const {height, width, src} = imgEl.current
    containerEl.current.style.gridColumnEnd = `span ${getSpanEstimate(width)}`
    containerEl.current.style.gridRowEnd = `span ${getSpanEstimate(height)}`
    containerEl.current.style.backgroundImage = `url(${src})`
    containerEl.current.style.maxWidth = 'initial'
  }

  return (
    <Wrapper ref={containerEl}>

        <img onLoad={() => addStyle()} ref={imgEl} src={event.image} alt={event.title} />

    </Wrapper>
  )
}
