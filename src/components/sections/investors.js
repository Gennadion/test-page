import React from "react";
import styled from "styled-components";
import Container, { SectionContainer } from "../containers/container";
import Partner01 from "../../images/binance.png";
import Partner02 from "../../images/finexpo.png";

 const Wrapper = styled.div`
  width: 1220px;
  margin: 0 auto;
  position: relative;
  padding: 0 15px;
  padding-bottom: 160px;
`;

 const Header = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  margin-bottom: 130px;

  h2 {
    font-weight: 700;
    font-size: 52px;
  }

  a {
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
  }
`;

 const InvestorList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

 const InvestorItem = styled.div`
  margin-right: 50px;
  margin-bottom: 90px;
`;

const Investors = () => {
    return(
        <Container id="invest" padding="0">
            <SectionContainer padding="0">
                <Wrapper>
                    <Header>
                        <h2>Investors & Partners</h2>
                        <a href="#">Become an investor</a>
                    </Header>
                    <InvestorList>
                        <InvestorItem><a href="#"><img src={Partner01} /></a></InvestorItem>
                        <InvestorItem><a href="#"><img src={Partner02} /></a></InvestorItem>
                    </InvestorList>
                </Wrapper>
            </SectionContainer>
        </Container>
    );
};

export default Investors;
