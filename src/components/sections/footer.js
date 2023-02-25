import React from 'react';
import styled from 'styled-components';
import Container, { SectionContainer } from '../containers/container'
import Grid from '../containers/grid'
import {Text} from '../../themes/typography';
import Logo from '../../images/svg/whaleup-logo.svg';

 const Icon = styled.a`

  img {
    width: 10rem;
    max-width: 100%;

    @media screen and (max-width: 920px) {
      width: 8rem;
    }
  }
`;

const Footer = () => {
  return (
    <SectionContainer id='contact' bg="#f2f2f2">
      <Container>
        
        <Grid mobilerowgap="2rem" columns="1fr 1fr 1fr 1fr" columngap="0" rowgap="0" align="center" justify="center">
            <Icon to='/'>
                <img src={Logo} alt="icon"/>
            </Icon>
            <div>
                <Text size="1.6rem">Vestibulum mollis rutrum interdum</Text>
                <Text size="1.6rem">Vestibulum mollis rutrum interdum</Text>
            </div>
            <div>
                <Text size="1.6rem">Vestibulum mollis rutrum interdum</Text>
                <Text size="1.6rem">Vestibulum mollis rutrum interdum</Text>
            </div>
            <div>
                <Text size="1.6rem">Vestibulum mollis rutrum interdum</Text>
                <Text size="1.6rem">Vestibulum mollis rutrum interdum</Text>
            </div>
        </Grid>
        <Grid mobilerowgap="2rem" columns="1fr" columngap="0" rowgap="0" align="center" justify="center">
            <Text size="1rem" margin="3rem 0 0">Copyright ©2022 by WhaleUp Ventures</Text>
        </Grid>

      </Container>
    </SectionContainer>
  );
};

export default Footer;