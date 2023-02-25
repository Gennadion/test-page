import React from "react";
import styled from "styled-components";
import Container, { SectionContainer } from "../containers/container";
import Check from "../../images/svg/roadmap__list-item-plus.svg";
import Arrow from "../../images/svg/roadmap__list-item.svg";

 const Wrapper = styled.div`
  width: 1220px;
  margin: 0 auto;
  position: relative;
  padding: 0 15px;
  padding-bottom: 130px;
`;

 const RoadH2 = styled.h2`
  font-weight: 700;
  font-size: 52px;
  text-align: center;
  padding-bottom: 55px;
`;

 const RoadList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

 const ListBlock = styled.div`
  width: calc(33.33% - 28px);
  background: #ffffff;
  border: 1px solid #e1e0e5;
  border-radius: 20px;
`;

 const BlockTitle = styled.div`
  font-weight: 700;
  font-size: 30px;
  color: #ffffff;
  height: 100px;
  background-image: ${props => props.bg || 'linear-gradient(180deg, #06beb6 0%, #48b1bf 100%)'};
  border-radius: 20px 20px 0 0;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  padding: 0 25px;
`;

 const BlockBody = styled.div`
  padding: 35px 25px;
`;

 const Point = styled.div`
    display: inline-block;
    margin-bottom: 18px;
    padding-left: 10px;
    font-size: 16px;
    font-weight: 700;
`;

 const PointImg = styled.img`
        display: inline-block;
        padding-right: 10px;
`;

const Roadmap = () => {
    return(
        <Container id="roadmap" padding="0">
            <SectionContainer padding="0">
                <Wrapper>
                    <RoadH2>Roadmap</RoadH2>
                    <RoadList>
                        <ListBlock>
                            <BlockTitle bg=''>Q2/2022</BlockTitle>
                            <BlockBody>
                                <Point><PointImg src={Check} />Site and Social Networks Launch</Point>
                                <Point><PointImg src={Arrow} />Contracts released on BSC</Point>
                                <Point><PointImg src={Arrow} />FxBox NFT DEX</Point>
                                <Point><PointImg src={Arrow} />NFT Lucky Box sales</Point>
                                <Point><PointImg src={Arrow} />FxBox Referral system V1</Point>
                                <Point><PointImg src={Arrow} />NFTs Staking and Rewards</Point>
                                <Point><PointImg src={Arrow} />Pancake DEX listing</Point>
                                <Point><PointImg src={Arrow} />NFTs Farming Feature</Point>
                                <Point><PointImg src={Arrow} />Marketplace</Point>
                                <Point><PointImg src={Arrow} />Listings $FXB Token on CEXs</Point>
                            </BlockBody>
                        </ListBlock>
                        <ListBlock>
                        <BlockTitle bg='linear-gradient(26deg, #FF345F 0%, #F59233 12%, #EAFF00 100%)'>Q3/2022</BlockTitle>
                            <BlockBody>
                                <Point><PointImg src={Arrow} />New NFTs Launch</Point>
                                <Point><PointImg src={Arrow} />NFTs Summon feature</Point>
                                <Point><PointImg src={Arrow} />Lottery V1</Point>
                                <Point><PointImg src={Arrow} />Oracle Game V1 Web</Point>
                                <Point><PointImg src={Arrow} />Forex Trading Web</Point>
                                <Point><PointImg src={Arrow} />Forex Trading PC</Point>
                                <Point><PointImg src={Arrow} />Forex Trading Mobile</Point>
                            </BlockBody>
                        </ListBlock>
                        <ListBlock>
                        <BlockTitle bg='linear-gradient(25deg, #D800FF 0%, #D802FD 28%, #EE9961 100%);'>Q4/2022</BlockTitle>
                            <BlockBody>
                                <Point><PointImg src={Arrow} />New NFTs Launch</Point>
                                <Point><PointImg src={Arrow} />CEX listings $FXB Token </Point>
                                <Point><PointImg src={Arrow} />Mini Financial Games</Point>
                                <Point><PointImg src={Arrow} />Lottery V2</Point>
                                <Point><PointImg src={Arrow} />Oracle Game V2 Web</Point>
                                <Point><PointImg src={Arrow} />Social/Copy Trading Feature</Point>
                            </BlockBody>
                        </ListBlock>
                    </RoadList>
                </Wrapper>
            </SectionContainer>
        </Container>
    );
};

export default Roadmap;
