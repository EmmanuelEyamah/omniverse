import React from 'react';
import { styled} from "styled-components";

const Root = styled.div`
  height: 100vh;
  width: 100%;
  background: #1D1B1B;
  display: flex;
  padding: 15px 60px;
  box-sizing: border-box;
  position: relative;
  align-items: center;
  justify-content: center;
  gap: 60px;
  overflow: hidden;

  @media (max-width: 775px) {
    flex-direction: column;
    gap: 0px; 
    padding: 25px 30px;
    height: 100%;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  padding: 100px 0;

  @media (max-width: 775px) {
    width: 100%;
    padding: 0px 15px;
  }
`;

const Header = styled.div`
  color: #FFF;
  font-family: Montserrat;
  font-size: 64px;
  font-style: normal;
  font-weight: 700;
  line-height: 70px; /* 125% */
  letter-spacing: -1.5px;

  @media (max-width: 775px) {
    font-size: 45px;
    line-height: 50px;
  }
  @media (max-width: 1300px) {
    font-size: 45px;
    line-height: 50px;
  }
`;

const Span = styled.div`
  color:  #10c8ff;
`;

const Paragraph = styled.div`
  color: #fff;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;

  @media (max-width: 775px) {
    font-size: 16px;
  }
  @media (max-width: 1300px) {
    font-size: 16px;
  }
`;

const Button = styled.div`
  width: 150px;
  height: 45px;
  flex-shrink: 0;
  border-radius: 4px;
  background: #10c8ff;
  color: #FFF;
  text-align: center;
  font-family: "DM Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  margin-top: 10px;
  z-index: 100;

  @media (max-width: 775px) {
    font-size: 12px;
    height: 25px;
    width: 100px;
  }
  
`;

const Blur = styled.div`
  background: #4F8A8B;
  filter: blur(125px);
  width: 303px;
  height: 303px;
  flex-shrink: 0;
  position: absolute;
  right: 20px;
  top: 30px;
`;

const Blur2 = styled.div`
  background: #4F8A8B;
  filter: blur(125px);
  width: 303px;
  height: 303px;
  flex-shrink: 0;
  position: absolute;
  left: 20px;
  bottom: 10px;
`;


const Banner = styled.div`
  width: 800px;
  z-index: 100;

  @media (max-width: 775px) {
    width: 550px;
  }

  @media (max-width: 1300px) {
    width: 450px;
  }
`;

const Img = styled.img`
  width: 100%;
  object-fit: center;
`;

const Landing = () => {
  return (
    <Root>
      <Blur></Blur>
      <Blur2></Blur2>
      <Content>
        <Header>Infinite Solution <br /> <Span>One Mutiverse</Span></Header>
        <Paragraph>Transforming ideas into innovations: where code meets creativity <br />and data sparks insights -your all-in-one platform for seamless collaboration and groundbreaking solutions.</Paragraph>
        <Button>Get Started</Button>
      </Content>
      <Banner>
        <Img src="/assets/homepage.png" />
      </Banner>
    </Root>
  )
}

export default Landing