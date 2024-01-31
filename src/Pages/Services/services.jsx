import React from 'react';
import { styled } from "styled-components";
import { Space, Row, Col } from "antd";
import { CodeFilled, SketchOutlined, BarChartOutlined, NotificationFilled, ArrowRightOutlined } from '@ant-design/icons';

const Root = styled.div`
  height: 100%;
  width: 100%;
  background: #1D1B1B;
  display: flex;
  padding: 15px 60px;
  box-sizing: border-box;
  position: relative;
  flex-direction: column;
  gap: 40px;
  overflow: hidden;
`;

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 30vh;
  padding: 50px 0;

  @media (max-width: 1350px) {
    flex-direction: column-reverse;
    height: 100%;
  }
`;

const Content = styled.div`
  width: 60%;

  @media (max-width: 1350px) {
    width: 100%;
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

  @media (max-width: 1350px) {
    font-size: 55px;
  }
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

const ContentCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 70px 0;

  @media (max-width: 1350px) {
    width: 100%;
  }
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
    font-size: 30px;
  }
`;

const SubHeadings = styled.div`
  color: #FFF;
  font-family: "Playfair Display";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
  letter-spacing: -1.35px;
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

const Span = styled.span`
  color:  #10c8ff;
`;

const Paragraph = styled.div`
  color: rgba(255, 255, 255, 0.70);
  font-family: "DM Sans";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 25.6px */
  letter-spacing: 0.3px;
  margin-top: 5px;
`;

const Title = styled.div`
  color: #10c8ff;
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  text-transform: uppercase;
`;

const OurValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

const Offering = styled.div`
  margin-top: 20px;
`;

const Card = styled.div`
  width: 400px;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 2px solid #10c8ff;
  flex-direction: column;
  padding: 10px 0px;
  border-radius: 8px;
  margin-bottom: 20px;

  @media (max-width: 1350px) {
    width: 100%;
  }
`;


const Banner = styled.div`
  width: 800px;
  z-index: 100;

  @media (max-width: 1350px) {
    width: 450px;
  }
`;
const BImg = styled.img`
  width: 100%;
  object-fit: center;
`;
const Services = () => {
  return (
    <Root>
      <Section>
        <Banner>
          <BImg src="/assets/logoA.png" />
        </Banner>
        <Content>
          <Header>OMNITECH</Header>
          <SubHeading>Infinite Solution <Span>One Mutiverse</Span></SubHeading>
        </Content>
      </Section>
      <Space direction="vertical">
        <Title>Services</Title>
        <Paragraph>
          Embark on a journey where our services transcend the ordinary, creating a symphony of innovation and reliability. With unwavering commitment, we craft solutions that not only meet but exceed expectations, ensuring a seamless blend of creativity, security, and excellence. From concept to execution, our services are a testament to our passion for turning challenges into triumphs. Join us on the path of distinction, where every project is a canvas for brilliance, and every partnership is built on the pillars of trust and exceptional service.
        </Paragraph>
      </Space>

      <OurValue>
        <Title>What We Offer</Title>
        <Offering>
          <Row gutter={16}>
            <Col xs={24} sm={12} md={8}>
              <Card>
                <CodeFilled  style={{ fontSize: "24px", color: "#10c8ff"}}/>
                <SubHeadings>Development</SubHeadings>
                <Paragraph style={{ width: "270px", textAlign: "center"}}>
                  Fuel your business growth with tailored software solutions, ensuring efficiency, scalability, and a competitive edge in the digital landscape.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card>
                <SketchOutlined  style={{ fontSize: "24px", color: "#10c8ff"}}/>
                <SubHeadings>Brand Identity and Design</SubHeadings>
                <Paragraph style={{ width: "270px", textAlign: "center"}}>
                  Capture attention and build lasting connections with a compelling brand identity and design, reflecting the essence of your business.
                </Paragraph>
              </Card>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col xs={24} sm={12} md={8}>
              <Card>
                <BarChartOutlined  style={{ fontSize: "24px", color: "#10c8ff"}}/>
                <SubHeadings>Data Analysis</SubHeadings>
                <Paragraph style={{ width: "270px", textAlign: "center"}}>
                  Unlock actionable insights from your data, empowering informed decision-making and strategizing for sustained business success.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card>
                <NotificationFilled  style={{ fontSize: "24px", color: "#10c8ff"}}/>
                <SubHeadings>Marketing</SubHeadings>
                <Paragraph style={{ width: "270px", textAlign: "center"}}>
                  Elevate your brand presence and reach new heights with strategic marketing, driving engagement, and fostering meaningful connections with your audience..
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </Offering>
      </OurValue>

        <CTA>
            <ContentCont>
              <Title>Contact Us</Title>
              <SubHeading>Have you decided to work <br/> on a project with us?</SubHeading>
              <OnAction>
                <Circle></Circle>
                <Word>
                  Let's Talk! <ArrowRightOutlined />
                </Word>
              </OnAction>
            </ContentCont>
            <ImageCont>
              <Img src="/assets/contact-us.png" alt="let-talk"/>
            </ImageCont>
          </CTA>
    </Root>
  )
}

export default Services