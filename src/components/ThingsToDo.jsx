import React from 'react';
import styled from 'styled-components';
import Title from './atoms/Title'
import Card from './particles/Card'
import Image1 from '../assets/photo-1546006508-5bd647796a4c.jpeg'
import Image2 from '../assets/photo-1517263904808-5dc91e3e7044.jpeg'
import Image3 from '../assets/photo-1566737236500-c8ac43014a67.jpeg'

const Wrapper = styled.div`
    p{
        color:${({ theme }) => theme.text};
        font-weight: 700;
    }
`

const CardContainer = styled.div`
    display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  grid-template-rows: repeat(auto-fit, 260px);
  grid-auto-flow: dense;
  grid-gap: .3rem;
`

const demoObj = [
    {
        id: 1,
        title: "Poesía Movicom XV87",
        tags: ['Música', 'Poesía'],
        description: "Vení a hacer quilombo a la arruinadita fest 2014, \n con el pache, el tipo ese que no se puede nombrar\n y el otro tipo tambien…ver más",
        price: 0,
        image: Image2
    },
    {
        id: 2,
        title: "La superfiesta del capitan culo",
        tags: ['Música', 'Poesía'],
        description: "Vení a hacer quilombo a la arruinadita fest 2014, \n con el pache, el tipo ese que no se puede nombrar\n y el otro tipo tambien…ver más",
        price: 0,
        image: Image1
    },
    {
        id: 3,
        title: "La arruinadita fest",
        tags: ['Música', 'Poesía'],
        description: "Vení a hacer quilombo a la arruinadita fest 2014, \n con el pache, el tipo ese que no se puede nombrar\n y el otro tipo tambien…ver más",
        price: 99.99,
        image: Image3
    },
    {
        id: 4,
        title: "La arruinadita fest",
        tags: ['Música', 'Poesía'],
        description: "Vení a hacer quilombo a la arruinadita fest 2014, \n con el pache, el tipo ese que no se puede nombrar\n y el otro tipo tambien…ver más",
        price: 99.99,
        image: Image3
    },
    {
        id: 5,
        title: "Poesía Movicom XV87",
        tags: ['Música', 'Poesía'],
        description: "Vení a hacer quilombo a la arruinadita fest 2014, \n con el pache, el tipo ese que no se puede nombrar\n y el otro tipo tambien…ver más",
        price: 0,
        image: Image2
    },

]

const Bio = () => {
    return <Wrapper>
        <Title content={"Cosas para hacer en Buenos Aires, Argentina"} />
        <CardContainer>
            {demoObj.map(el => (
                <Card key={el.id} event={el} />
            ))}
        </CardContainer>
    </Wrapper>

}

export default Bio
