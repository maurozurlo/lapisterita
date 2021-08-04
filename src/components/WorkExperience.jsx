import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {Grid, Title} from './atoms/'

const Wrapper = styled.div`

p{
    color:${({ theme }) => theme.text};
    font-weight: 700;
}
`


const Project = styled.div`
    display: flex;
    background-color: ${({ theme }) => theme.bg50};
    align-items:center;
    justify-content: center;
    border-radius:  ${({ theme }) => theme.borderRadius};
    padding: 1.5em;
    transition: all .5s ease;
    box-shadow: -1px 3px 10px ${({ theme }) => theme.softShadow};

    a{
        text-decoration: none;
    }
    
    &:hover{
        transform: translateY(-1em);
    }

    h2{
        color:${({ theme }) => theme.title2};
    }
`

const SeeAll = styled(Link)`
    text-align: center;
    display: block;
    padding: 1em;
    text-decoration: none;
    margin: 0 auto;
`



const WorkExperience = () => {
    const projects = [
        {name: "MadMobile", link: 'madmobile'},
        {name: "Messy.fm", link: 'messyfm'},
        {name: "CargoPanel", link: 'cargopanel'},
        {name: "Personal Projects", link: 'personal'},
    ]
    return <Wrapper>
        <Title content="Work Experience" />
        <Grid content={
            <>
            {projects.map(project =>
                <Project key={project.name}>
                    <Link to={`/work/${project.link}`}><h2>{project.name}</h2></Link>
                </Project>
            )}
            </>
        } />
        <SeeAll to="/work">See all</SeeAll>
    </Wrapper>

}

export default WorkExperience