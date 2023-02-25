import React, { useState } from 'react';
import styled from "styled-components";
import HeroPic from "../../images/fs__right.jpeg";
import RocketPic from "../../images/fs__icon.jpg";
import Container, { SectionContainer } from "../containers/container";

 const HeroBg = styled.div`
  margin: 0;
  padding: 10rem 3rem;
  width: 100%;
  background-color: white;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
`;

 const HeroWrapper = styled.div`
  width: 1220px;
  margin: 0 auto;
  position: relative;
  padding: 0 15px;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 160px;
`;

 const HeroLeft = styled.div`
  width: 50%;
`;

 const HeroRight = styled.div`
  width: 50%;
`;

 const HeroH1 = styled.h1`
  color: #000;
  font-size: 6.8rem;
  font-weight: 700;
  text-align: left;
  margin: 1rem 0;
`;

 const HeroP = styled.p`
  margin: 1rem 0;
  color: #000;
  font-size: 1.7rem;
  line-height: 1.25;
  text-align: left;
  font-weight: 400;

  span {
    background: #fa4f70;
    border-radius: 13.5px;
    width: 6.8rem;
    height: 27px;
    padding: 2px 9px;
    display: inline;
    align-content: center;
    align-items: center;
    color: #fff;
    font-size: 1.7rem;
    margin-right: 15px;
  }
`;

 const HeroBtnWrapper = styled.div`
  margin-top: 32px;
  display: block;
  text-decoration: none;
`;

 const NavBtnLink = styled.a`
  border-radius: 50px;
  background: #0091ff;
  white-space: nowrap;
  padding: 1.4rem 3.4rem;
  color: #ffffff;
  outline: none;
  border: none;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-size: 2rem;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #0091ff;
    box-shadow: 0px 0px 0px 1px #f2f2f2;
    text-decoration: none;
  }
`;

function HeroSection() {
  return (
    <Container id="home" padding="0">
      <HeroBg>
        <SectionContainer padding="0">
          <HeroWrapper>
            <HeroLeft>
              <div>
                <HeroP>
                  <span>NEW</span>Synergy of Crypto GameFi, NFTs & Forex Trading, Made Easy
                </HeroP>
                <HeroH1>Crypto & Forex GameFi, NFTs, Trading</HeroH1>
                <img src={`${RocketPic}`} alt="#" />
                <HeroP>
                  Swap, Stake, Mine, Farming and Trading - FxBox is
                  revolutionising the GameFi space by gamifying Financial
                  Trading.
                </HeroP>
                <HeroP>
                  How 2 Earn: Forex Trading, Lottery, Oracle, Stake in pools,
                  Farming and Summon NFTs!
                </HeroP>
                <HeroBtnWrapper>
                  <NavBtnLink to="#">Become an Investor</NavBtnLink>
                </HeroBtnWrapper>
              </div>
            </HeroLeft>
            <HeroRight>
              <img src={`${HeroPic}`} alt="#"></img>
            </HeroRight>
          </HeroWrapper>
        </SectionContainer>
      </HeroBg>
    </Container>
  );
}

export default HeroSection;
