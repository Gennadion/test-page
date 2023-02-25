import styled from "styled-components";
import Container, { SectionContainer } from "../containers/container";
import Icon1 from "../../images/svg/item-icon-01.svg";
import Icon2 from "../../images/svg/item-icon-02.svg";
import Icon3 from "../../images/svg/item-icon-03.svg";
import Icon4 from "../../images/svg/item-icon-04.svg";
import Icon5 from "../../images/svg/item-icon-05.svg";

 const Wrapper = styled.div`
  width: 1220px;
  margin: 0 auto;
  position: relative;
  padding: 0 15px;
  padding-top: 120px;
  padding-bottom: 70px;
`;

 const H2 = styled.h2`
  text-align: center;
  padding-bottom: 80px;
  font-weight: 700;
  font-size: 52px;
  display: block;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

 const List = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

 const ListItem = styled.div`
  display: block;
  text-align: center;
  width: calc(33.33% - 30px);
  margin-right: 30px;
  margin-bottom: 60px;
`;

 const ItemIcon = styled.div`
  background-image: linear-gradient(
    145deg,
    #e468f6 0%,
    #a578ff 49%,
    #6681ff 100%
  );
  border-radius: 10px;
  height: 80px;
  width: 80px;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

 const ItemTitle = styled.div`
  display: block;
  font-weight: 700;
  font-size: 30px;
  color: #000000;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 25px;
`;

 const ItemText = styled.div`
  display: block;
  font-size: 18px;
  line-height: 27px;
`;

const HowToEarn = () => {
  return (
    <Container id="HowToEarn" padding="0">
      <SectionContainer padding="0">
        <Wrapper>
          <H2>How 2 Earn</H2>
          <List>
            <ListItem>
              <ItemIcon>
                <img src={Icon1} alt="#" />
              </ItemIcon>
              <ItemTitle>Lottery</ItemTitle>
              <ItemText>
                Playing the Lottery gives you a chance to win USDT! It's easy,
                fair, and you can enter as often as you like as long as you have
                the USDT to buy a ticket
              </ItemText>
            </ListItem>
            <ListItem>
              <ItemIcon>
                <img src={Icon2} alt="#" />
              </ItemIcon>
              <ItemTitle>Oracle</ItemTitle>
              <ItemText>
                Guess which currency price will rise or fall. Try our oracle
                game and predict correctly to win!
              </ItemText>
            </ListItem>
            <ListItem>
              <ItemIcon>
                <img src={Icon3} alt="#" />
              </ItemIcon>
              <ItemTitle>Forex Trading</ItemTitle>
              <ItemText>
                The foreign exchange market is a global decentralized or
                over-the-counter market for the trading of currencies
              </ItemText>
            </ListItem>
            <ListItem>
              <ItemIcon>
                <img src={Icon4} alt="#" />
              </ItemIcon>
              <ItemTitle>Copy Trading</ItemTitle>
              <ItemText>
                Spy on and copy the best traders who have mastered their trading
                strategies among thousands of traders
              </ItemText>
            </ListItem>
            <ListItem>
              <ItemIcon>
                <img src={Icon5} alt="#" />
              </ItemIcon>
              <ItemTitle>Mini Games</ItemTitle>
              <ItemText>
                We plan to release a lot of games on the topic of finance. Sign
                up for our news and stay up to date!
              </ItemText>
            </ListItem>
          </List>
        </Wrapper>
      </SectionContainer>
    </Container>
  );
};

export default HowToEarn;
