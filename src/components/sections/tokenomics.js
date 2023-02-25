import React from "react";
import styled from "styled-components";
import Container, { SectionContainer } from "../containers/container";
import Icon from "../../images/token__title.jpg";
import PieChart from "../../images/svg/token.svg";

 const Wrapper = styled.div`
  width: 1220px;
  margin: 0 auto;
  position: relative;
  padding: 0 15px;
  padding-bottom: 120px;
  padding-top: 120px;
`;

 const TokenH2 = styled.h2`
  font-weight: 700;
  font-size: 52px;
  display: flex;
  align-content: center;
  align-items: center;
  padding-bottom: 50px;
`;

 const H2Pic = styled.img`
  margin-left: 20px;
`;

 const TokenWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  align-items: center;
`;

 const TokenBlock = styled.div`
  width: calc(50% - 25px);
`;

 const TokenTable = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 68px;
  align-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(108, 129, 255, 0.2);
`;

 const TR = styled.div``;

 const TH = styled.div``;

 const TD = styled.div``;

const Tokenomics = () => {
  return (
    <Container id="token" padding="0">
      <SectionContainer padding="0">
        <Wrapper>
          <TokenH2>
            Tokenomics <H2Pic src={Icon} />
          </TokenH2>
          <TokenWrap>
            <TokenBlock>
              <img src={PieChart} alt="#" />
            </TokenBlock>
            <TokenBlock>
              <TokenTable>
                <TD>Level</TD>
                <TD>Total Hash Power</TD>
                <TD>Daily rewards</TD>
              </TokenTable>
              <TokenTable>
                <TD>1</TD>
                <TD>0 ~ 50000</TD>
                <TD>20,000</TD>
              </TokenTable>
              <TokenTable>
                <TD>2</TD>
                <TD>50000 ~ 100000</TD>
                <TD>40,000</TD>
              </TokenTable>
              <TokenTable>
                <TD>3</TD>
                <TD>100000 ~ 200000</TD>
                <TD>80,000</TD>
              </TokenTable>
              <TokenTable>
                <TD>4</TD>
                <TD>200000 ~ 300000</TD>
                <TD>120,000</TD>
              </TokenTable>
              <TokenTable>
                <TD>5</TD>
                <TD>300000 ~ 400000</TD>
                <TD>160,000</TD>
              </TokenTable>
              <TokenTable>
                <TD>6</TD>
                <TD>{'>'} 400000</TD>
                <TD>200,000</TD>
              </TokenTable>
            </TokenBlock>
          </TokenWrap>
        </Wrapper>
      </SectionContainer>
    </Container>
  );
};

export default Tokenomics;
