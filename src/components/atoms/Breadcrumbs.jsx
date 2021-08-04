import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
    display:flex;
    align-items:center;
    padding: 1em 0;

    a{
        color:${({ theme }) => theme.title};
        padding: 0 .5em;
        font-weight: 700;
    }
`

const Breadcrumbs = ({ path }) => {
    return <Wrapper>
        {path.map((el, i) =>
            <Fragment key={el}>
                <Link to={Array.isArray(el) ? `/${el[1]}` : `/${el.toLowerCase()}`}>
                    {Array.isArray(el) ? el[0] : el}
                </Link>
                {i !== path.length - 1 && <small>{'>'}</small>}
            </Fragment>
        )}
    </Wrapper>

}

export default Breadcrumbs
