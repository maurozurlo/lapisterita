import React, { useState } from 'react'

import { useParams } from 'react-router-dom'
import styled from 'styled-components'


import { Breadcrumbs, Section, Grid } from '../components/atoms'
import { ContactForm, WorkExperience, ProjectView } from '../components/'


const getProjectInfo = id => {
    try {
        const project = require(`../projects/${id}`)
        return project
    } catch (error) {
        return {
            title: 'Undefined project',
            description: "Yeah, this doesn't look like a real project..."
        }
    }
}

const SubProjects = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`

const ProjectDetails = styled.div`
    background-color: ${({ theme }) => theme.bg50};
    padding: 1em;
    border-radius:  ${({ theme }) => theme.borderRadius};
    margin-bottom: .5em;
`

const ProjectTitle = styled.li`
    background-color: ${({ theme }) => theme.bg50};
    margin-bottom: .5em;
    padding: 1em;
    border-radius:  ${({ theme }) => theme.borderRadius};
    transition: all .5s ease;
    box-shadow: -1px 3px 10px ${({ theme }) => theme.softShadow};
    color:${({ theme }) => theme.title2};
    font-weight: 700;
    cursor:pointer;

    a{
        text-decoration: none;
    }
`

const Work = () => {
    const { id } = useParams()
    const project = getProjectInfo(id)
    const [selectedProject, setSelectedProject] = useState(Array.isArray(project.subprojects) ? project.subprojects[0] : {})

    React.useEffect(() => {
        setSelectedProject(Array.isArray(project.subprojects) ? project.subprojects[0] : {})
    }, [project])


    return (
        <Section content={
            <>
                <Breadcrumbs path={["Work", [project.title, project.link]]} />
                <Grid content={
                    <>
                        <SubProjects>
                            {Array.isArray(project.subprojects) &&
                                project.subprojects.map(subproject =>
                                    <ProjectTitle key={subproject.title} onClick={() => setSelectedProject(subproject)}>
                                        {subproject.title}
                                    </ProjectTitle>)}
                        </SubProjects>
                        <ProjectDetails>
                            {Object.keys(selectedProject).length > 0 && <ProjectView project={selectedProject} />}
                        </ProjectDetails>
                    </>
                } />
                <WorkExperience />
                <hr />
                <ContactForm />
            </>
        } />
    )
}

export default Work