import React from 'react';
import { styled } from "styled-components";
import { Row, Col } from "antd";


const Root = styled.div`
  height: 100vh;
  width: 100%;
  background: #1D1B1B;
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 15px 60px;
  box-sizing: border-box;
  flex-direction: column;
  position: relative;
  overflow: hidden;

  @media (max-width: 1350px) {
    height: 100%;
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

const Paragraph = styled.div`
  color: rgba(255, 255, 255, 0.70);
  font-family: "DM Sans";
  font-size: 16px;
  font-style: normal;
  width: 625px;
  font-weight: 400;
  line-height: 160%; /* 25.6px */
  letter-spacing: 0.3px;
  margin-top: 10px;
  text-align: center;

  @media (max-width: 1350px) {
    width: 100%;
    text-align: center;
  }
`;

const OurTeams = styled.div`
  margin-top: 60px;
  z-index: 100;
`;

const Card = styled.div`
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 2px solid #10c8ff;
  flex-direction: column;
  padding: 10px 0px;
  border-radius: 8px;
  margin-top: 20px;
`;

const ImageCont = styled.div`
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  padding: 70px 0;
  z-index: 100;
  border-radius: 50%;
  background: #10c8ff;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  width: 100%;
  object-fit: center;
`;

const Name = styled.div`
  color: #FFF;
  text-align: center;
  font-family: "DM Sans";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.4px;
`;

const JobTitle = styled.div`
  color: rgba(255, 255, 255, 0.70);
  text-align: center;
  font-family: "DM Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.32px;
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

const Teams = () => {
  return (
    <Root>
      <Blur></Blur>
      <Blur2></Blur2>
      <Title>Our Teams</Title>
      <Paragraph>
        Empower Your Vision with Our Dedicated Dream Team: Where passion meets expertise, we're committed to bringing your ideas to life with boundless creativity and unwavering dedication.
      </Paragraph>

      <OurTeams>
        <Row gutter={16}>
          <Col xs={24} sm={12} md={8}>
            <Card>
              <ImageCont>
                <Img src="/assets/team1.png"/>
              </ImageCont>
              <Name>Eyamah Emmanuel</Name>
              <JobTitle>Software Developer</JobTitle>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card>
              <ImageCont>
                <Img src="/assets/team2.png"/>
              </ImageCont>
              <Name>Ibee Bamidele</Name>
              <JobTitle>Brand Identity Designer</JobTitle>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card>
              <ImageCont>
                <Img src="/assets/team3.png"/>
              </ImageCont>
              <Name>Adekunle Peter</Name>
              <JobTitle>Data Analysist and Marketer </JobTitle>
            </Card>
          </Col>
        </Row>
      </OurTeams>
    </Root>
  )
}

export default Teams