import React from 'react'
import styled from 'styled-components'
import Container from '../containers/container'

const StyledHeader = styled.header`
    position: absolute;
    top: 0;
    width: 100%;
    padding: 1rem 0;
    z-index: 9;

    &.active {
        background-color: var(--color-blue);
    }
`

const Header = () => {
    return (
        <StyledHeader id="header">
            <Container>
                Header
            </Container>
        </StyledHeader>
    )
}

export default Header
