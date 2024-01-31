import React from 'react'
import { styled } from "styled-components";
import Landing from './components/landing/landing';
import Services from './components/services/services';
import Teams from './components/teams/teams';
import Whyus from './components/whyus/whyus';
import { ArrowRightOutlined } from "@ant-design/icons"


const Root = styled.div`
  box-sizing: border-box;
  overflow: hidden;
`;

const CTA = styled.div`
  width: 100%;
  height: 70vh;
  background: #1D1B1B;
  display: flex;
  padding: 15px 60px;
  gap: 90px;
  box-sizing: border-box;

  @media (max-width: 1350px) {
    flex-direction: column;
    height: 100%;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  padding: 70px 0;

  @media (max-width: 1350px) {
    width: 100%;
  }
`;

const Title = styled.div`
  color: #10c8ff;
  font-family: Poppins;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  text-transform: uppercase;
`;

const SubHeading = styled.div`
  color: #FFF;
  font-family: "Playfair Display";
  font-size: 45px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
  letter-spacing: -1.35px;

  @media (max-width: 1350px) {
    font-size: 35px;
  }
`;

const OnAction = styled.div`
  width: 230px;
  position: relative;
  margin-top: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Circle = styled.div`
  width: 80px;
  height: 80px;
  background: #10c8ff;
  border-radius: 50%;
  position: absolute;
  left: 0;
`;

const Word = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  position: absolute;
  right: 7px;
  color: #FFF;
  font-family: "Playfair Display";
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 51.2px */
  letter-spacing: -0.96px;
`;

const ImageCont = styled.div`
  width: 500px;
  flex-shrink: 0;
  z-index: 100;

  @media (max-width: 1350px) {
    width: 100%;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: center;
`;

const Home = () => {
  return (
    <Root>
        <Landing />
        <Whyus />
        <Services />
        <Teams />
        <CTA>
          <Content>
            <Title>Contact Us</Title>
            <SubHeading>Have you decided to work <br/> on a project with us?</SubHeading>
            <OnAction>
              <Circle></Circle>
              <Word>
                Let's Talk! <ArrowRightOutlined />
              </Word>
            </OnAction>
          </Content>
          <ImageCont>
            <Img src="/assets/contact-us.png" alt="let-talk"/>
          </ImageCont>
        </CTA>
    </Root>
  )
}

export default Home