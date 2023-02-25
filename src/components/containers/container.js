import styled from 'styled-components'

const Container = styled.div`
    width: 100%;
    padding: ${props => props.padding || '0 1.5rem'};
    margin-right: auto;
    margin-left: auto;
    height: ${props => props.height || '100%'};
    background-color: ${props => props.bg || 'transparent'};
`

export const SectionContainer = styled.div`
    width: 100%;
    height: ${props => props.height || '100%'};
    padding: ${props => props.padding || '6rem 0'};
    margin: ${props => props.margin || '0'};
    background-color: ${props => props.bg || 'transparent'};
`

export default Container
