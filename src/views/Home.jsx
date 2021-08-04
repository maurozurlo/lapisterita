import React from 'react';
import { Section } from '../components/atoms'
import { ThingsToDo,
//   ContactForm,
//    WorkExperience
} from '../components'

const Home = () => {
    return (
        <Section content={
            <>
                <ThingsToDo />
                <hr />
                {/* <WorkExperience />
                <hr />
                <ContactForm /> */}
            </>
        } />
    )
}

export default Home