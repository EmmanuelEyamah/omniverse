import React from 'react'
import { styled } from "styled-components";
import { Row, Col } from "antd";
import { CodeFilled, SketchOutlined, BarChartOutlined, NotificationFilled } from '@ant-design/icons';

const Root = styled.div`
  height: 100vh;
  width: 100%;
  background: #1D1B1B;
  align-items: center;
  justify-content: center;
  display: flex;
  padding: 15px 60px;
  box-sizing: border-box;
  overflow: hidden;
  flex-direction: column;

  @media (max-width: 1350px) {
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
  left: 20px;
  bottom: 10px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 65px;
  width: 100%;

  @media (max-width: 1350px) {
    flex-direction: column;
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
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 36px */
`;

const Paragraph = styled.div`
  color: rgba(255, 255, 255, 0.70);
  font-family: "DM Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 25.6px */
  letter-spacing: 0.3px;
  width: 541px;
  margin-top: 10px;

  @media (max-width: 1350px) {
    width: 100%;
    text-align: center;
  }
`;

const Offering = styled.div`
  margin-top: 60px;
`;

const Card = styled.div`
  width: 300px;
  height: 230px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 2px solid #10c8ff;
  flex-direction: column;
  padding: 10px 0px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const Space = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  gap: 10px;

  @media (max-width: 1350px) {
    width: 100%;
    text-align: center;
  }
`;

const Services = () => {
  return (
    <Root>
      <Blur></Blur>
      <Header>
        <Space>
          <Title>Services</Title>
          <SubHeading>Where our services add value to your product</SubHeading>
        </Space>
          <Paragraph>
            Helping companies & individuals identify key solutions for their target markets. We boost their ability to create products. Our business model saves clients time and money. Don't reinvent the wheel.
          </Paragraph>
      </Header>
      <Offering>
        <Row gutter={24}>
          <Col xs={24} sm={12} md={8}>
            <Card>
              <CodeFilled  style={{ fontSize: "24px", color: "#10c8ff"}}/>
              <SubHeading>Development</SubHeading>
              <Paragraph style={{ width: "270px", textAlign: "center"}}>
                Fuel your business growth with tailored software solutions, ensuring efficiency, scalability, and a competitive edge in the digital landscape.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card>
              <SketchOutlined  style={{ fontSize: "24px", color: "#10c8ff"}}/>
              <SubHeading>Brand Identity and Design</SubHeading>
              <Paragraph style={{ width: "270px", textAlign: "center"}}>
                Capture attention and build lasting connections with a compelling brand identity and design, reflecting the essence of your business.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card>
              <BarChartOutlined  style={{ fontSize: "24px", color: "#10c8ff"}}/>
              <SubHeading>Data Analysis</SubHeading>
              <Paragraph style={{ width: "270px", textAlign: "center"}}>
                Unlock actionable insights from your data, empowering informed decision-making and strategizing for sustained business success.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card>
              <NotificationFilled  style={{ fontSize: "24px", color: "#10c8ff"}}/>
              <SubHeading>Marketing</SubHeading>
              <Paragraph style={{ width: "270px", textAlign: "center"}}>
                Elevate your brand presence and reach new heights with strategic marketing, driving engagement, and fostering meaningful connections with your audience..
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </Offering>
    </Root>
  )
}

export default Services