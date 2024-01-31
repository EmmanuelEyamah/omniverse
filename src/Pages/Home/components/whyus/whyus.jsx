import React from 'react'
import { styled } from "styled-components";

const Root = styled.div`
  height: 100vh;
  background: #1D1B1B;
  width: 100%;
  box-sizing: border-box;
  position: relative;
  display: flex;
  padding: 15px 60px;
  gap: 60px;
  overflow: hidden;

  @media (max-width: 1350px) {
    flex-direction: column;
    gap: 0px; 
    padding: 25px 30px;
    height: 100%;
  }

  @media screen and (min-width: 1351px) and (max-width: 1430px) {
    height: 70vh;
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
  top: 20px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  padding: 100px 0;

  @media (max-width: 1350px) {
    width: 100%;
    padding: 0px 15px;
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

  @media (max-width: 775px) {
    font-size: 16px;
  }
`;

const SubHeading = styled.div`
  color: #FFF;
  font-family: "Playfair Display";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;

  @media (max-width: 775px) {
    font-size: 18px;
  }
`;

const Paragraph = styled.div`
  color: rgba(255, 255, 255, 0.70);
  font-family: "DM Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 25.6px */
  letter-spacing: 0.3px;
  margin-top: 10px;

  @media (max-width: 775px) {
    font-size: 14px;
  }
`;

const HireUs = styled.div`
  width: 120px;
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

  @media (max-width: 775px) {
    font-size: 12px;
    height: 25px;
    width: 100px;
  }
`;
const ImageCont = styled.div`
  width: 700px;
  height: 550px;
  flex-shrink: 0;
  padding: 80px 0;
  z-index: 100;

  @media (max-width: 1350px) {
    width: 100%;
    height: 100%;
  }

`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: center;
`;

const Whyus = () => {
  return (
    <Root>
      <Blur></Blur>
        <Content>
          <Title>Why Should Choose Us?</Title>
          <SubHeading>
            Unleashing limitless potential, we redefine possibilities for your success. Elevate your endeavors with a partner committed to innovation and excellence.
          </SubHeading>
          <Paragraph>
            We at Omnitech are your architects of success, meticulously crafting solutions that resonate with brilliance. Our commitment to innovation is the heartbeat of your projects, turning ideas into milestones. With a team driven by passion and expertise, we navigate the digital landscape with finesse, ensuring your journey is not just productive but extraordinary.
            <br /> <br />
            Beyond the ordinary, we transcend expectations. Choose Omnitech for a partnership that doesn't just meet your needs; it exceeds them. In a world of endless possibilities, make your mark with a team dedicated to your triumph – where success is not just a destination but a way of navigating the future.
          </Paragraph>
          <HireUs>Hire Us</HireUs>
        </Content>
        <ImageCont>
          <Img src="/assets/img.jpg" alt="about-img"/>
        </ImageCont>
    </Root>
  )
}

export default Whyus