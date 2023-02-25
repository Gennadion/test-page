import styled from "styled-components";
import Container, { SectionContainer } from "../containers/container";
import Icon01 from "../../images/features__item-01.png";
import Icon02 from "../../images/features__item-02.png";
import Icon03 from "../../images/features__item-03.png";
import Icon04 from "../../images/features__item-04.png";

const FeatWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin-bottom: 160px;
	width: 1220px;
	margin: 0 auto;
	position: relative;
	padding: 0 15px;
`;

const FeatBlock = styled.div`
	display: block;
	width: calc(50% - 44px);
`;

const BlockTitle = styled.div`
	display: block;
	font-weight: 700;
	font-size: 52px;
	color: #ffffff;
	padding-bottom: 26px;
`;

const RightText = styled.div`
	display: block;
	font-size: 20px;
	color: #ffffff;
	line-height: 30px;
	max-width: 190px;
`;

const LeftText = styled.div`
	display: block;
	font-size: 20px;
	color: #ffffff;
	line-height: 30px;
`;

const FeatH2 = styled.h2`
	display: block;
	padding-bottom: 135px;
	font-size: 79px;
	color: #000000;
	font-weight: 700;
`;

const Marketplace = styled.div`
	display: block;
	position: relative;
	padding: 45px;
	background-image: linear-gradient(180deg, #06beb6 0%, #48b1bf 100%);
	border-radius: 20px;
	height: 760px;

	img {
		display: block;
		margin: 0 auto;
		margin-top: 100px;
	}
`;

const Mining = styled.div`
	display: block;
	position: relative;
	padding: 45px;
	background-image: linear-gradient(180deg, #56aa2e 0%, #a6de61 100%);
	border-radius: 20px;
	height: 400px;
	margin-bottom: 60px;

	img {
		position: absolute;
		bottom: 0;
		right: -15px;
	}
`;

const Farming = styled.div`
	display: block;
	position: relative;
	padding: 45px;
	background-image: linear-gradient(
		25deg,
		#d800ff 0%,
		#d802fd 28%,
		#ee9961 100%
	);
	border-radius: 20px;
	height: 400px;
	margin-bottom: 60px;

	img {
		position: absolute;
		bottom: 0;
		right: 0;
	}
`;

const Summon = styled.div`
	display: block;
	position: relative;
	padding: 45px;
	background-image: linear-gradient(
		26deg,
		#ff345f 0%,
		#f59233 12%,
		#eaff00 100%
	);
	border-radius: 20px;
	margin-bottom: 60px;

	img {
		position: absolute;
		bottom: 0;
		right: 0;
	}
`;

const Features = () => {
	return (
		<Container id="features" padding="0">
			<SectionContainer padding="0">
				<FeatWrapper>
					<FeatBlock>
						<FeatH2>
							Features <br /> FxBox
						</FeatH2>
						<Marketplace>
							<BlockTitle>Marketplace</BlockTitle>
							<LeftText>
								FxBox Marketplace is where you sell and buy NFT.
								You can build your favorite NFT collection and
								earn commissions from affiliate programs
							</LeftText>
							<img src={Icon01} alt="#" />
						</Marketplace>
					</FeatBlock>
					<FeatBlock>
						<Mining>
							<BlockTitle>NFT Mining</BlockTitle>
							<RightText>
								You can mine $FXB flowing into your wallet every
								second with NO WORK required
							</RightText>
							<img src={Icon02} alt="#" />
						</Mining>
						<Farming>
							<BlockTitle>Farming</BlockTitle>
							<RightText>
								Put your tokens in and earn new NFTs from our
								farm
							</RightText>
							<img src={Icon03} alt="#" />
						</Farming>
						<Summon>
							<BlockTitle>Summon</BlockTitle>
							<RightText>
								With the synergy of 2 NFTs Currencies and $FXB
								tokens, you can perform the summon of a new NFT
								Currency
							</RightText>
							<img src={Icon04} alt="#" />
						</Summon>
					</FeatBlock>
				</FeatWrapper>
			</SectionContainer>
		</Container>
	);
};

export default Features;
