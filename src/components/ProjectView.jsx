import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const images = require.context('../../public/img/', true)

const Wrapper = styled.div`


`

const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
}

const ProjectView = ({ project }) => {
    return <Wrapper>
        <Slider style={{ maxWidth: '385px', margin: '0 auto' }} {...settings}>
            {Array.isArray(project.images) && project.images.map(image => 
                <img key={image} src={images(image).default} alt={project.title}/>
            )}
        </Slider>
        {project.description}
    </Wrapper>
}

export default ProjectView