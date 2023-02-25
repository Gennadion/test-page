import styled from "styled-components";
import Container, { SectionContainer } from "../containers/container";
import CollectPic from "../../images/collect-img.png";
import { useEffect, useState } from "react";

 const CollectBg = styled.div`
  background-image: linear-gradient(
    145deg,
    #e468f6 0%,
    #a578ff 49%,
    #6681ff 100%
  );
  padding-top: 115px;
  padding-bottom: 200px;
`;

 const CollectH2 = styled.h2`
  font-weight: 700;
  font-size: 52px;
  max-width: 550px;
  margin: 0 auto;
  position: relative;
  color: #fff;
  text-align: center;
`;

 const CollectImg = styled.img`
  display: block;
  margin: auto;
`;

 const CollectP = styled.p`
  max-width: 650px;
  margin: 0 auto;
  font-size: 20px;
  color: #ffffff;
  text-align: center;
  line-height: 30px;
`;

const Collect = () => {
  const [scrollCollect, setScrollCollect] = useState(false);
  const [changeImg, setChangeImg] = useState();

  const moveImg = () => {
    if (window.scrollY >= 80) {
      setScrollCollect(true);
      setChangeImg();
    } else {
      setScrollCollect(false);
      setChangeImg();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", moveImg);
  }, []);

  return (
    <Container id="collect" padding="0">
      <CollectBg>
        <SectionContainer padding="0">
          <CollectH2>
            Collect & Earn
            <br />
            using
            <br />
            Your Favorite NFTs
          </CollectH2>
          <CollectImg src={CollectPic} />
          <CollectP>
            You can collect your favorite currencies, open lucky boxes to get
            NFTs and stake them. Either way, your income will multiply. Everyone
            earns in our project. We took into account the experience of other
            projects and eliminated risks in the form of inflation.
          </CollectP>
        </SectionContainer>
      </CollectBg>
    </Container>
  );
};

export default Collect;
