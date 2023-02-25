import React from "react";
import Container, { SectionContainer } from "../containers/container";
import styled from "styled-components";
import Icon01 from "../../images/lucky.png";

 const LuckFragment = styled.div`
  background-image: linear-gradient(193deg, #004a8c 1%, #000930 100%);
  text-align: center;
  padding-top: 30px;
  padding-bottom: 140px;
`;

 const LuckWrapper = styled.div`
  width: 1220px;
  margin: 0 auto;
  position: relative;
  padding: 0 15px;
`;

 const LuckH2 = styled.h2`
  font-weight: 700;
  font-size: 52px;
  color: #fff;
  padding-bottom: 55px;
`;

 const LuckText = styled.p`
  max-width: 650px;
  font-size: 20px;
  color: #ffffff;
  text-align: center;
  line-height: 30px;
  margin: 0 auto;
  padding-bottom: 80px;
`;

 const LuckButton = styled.div`
  background-image: linear-gradient(
    145deg,
    #e468f6 0%,
    #a578ff 49%,
    #6681ff 100%
  );
  border-radius: 31px;
  height: 63px;
  display: inline-flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  padding: 0 36px;
  color: #fff;
  text-decoration: none;
  transition: 700ms;
`;

const Lucky = () => {
  return (
    <Container id="lucky" padding="0">
      <SectionContainer padding="0">
        <LuckFragment>
          <LuckWrapper>
            <LuckH2>Currency Lucky Box</LuckH2>
            <img src={Icon01} alt="#" />
            <LuckText>
              Test your luck, buy lucky boxes and win collections of unique NFTs
              which you can multiply your fortune with several times. Lucky
              Boxes are scheduled to launch in Q2 2022!
            </LuckText>
            <LuckButton>Buy Lucky Box</LuckButton>
          </LuckWrapper>
        </LuckFragment>
      </SectionContainer>
    </Container>
  );
};

export default Lucky;
