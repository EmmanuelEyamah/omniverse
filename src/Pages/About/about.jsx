import React from 'react';
import { styled } from "styled-components"; 
import { Space, Row, Col  } from "antd";
import { SafetyCertificateFilled, LockFilled, CrownFilled, ArrowRightOutlined } from '@ant-design/icons';


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

const SubHeading = styled.div`
  color: #FFF;
  font-family: "Playfair Display";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 36px */

  @media (max-width: 1350px) {
    font-size: 18px;
  }
`;

const SubHeadings = styled.div`
  color: #FFF;
  font-family: "Playfair Display";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 36px */

  @media (max-width: 1350px) {
    font-size: 35px;
  }
`;

const SubTitle = styled.div`
  color: #FFF;
  font-family: "Playfair Display";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 36px */
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

const Heading = styled.div`
  color: #10c8ff;
  font-family: Poppins;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  text-transform: uppercase;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 30px;
    height: 2px;
    background-color: #10c8ff;
    transform: translateY(-50%);
`;

const OurValue = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
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

const Offering = styled.div`
  margin-top: 20px;
`;

const Card = styled.div`
  width: 230px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: 2px solid #10c8ff;
  flex-direction: column;
  padding: 10px 0px;
  border-radius: 8px;
  margin-top: 10px;
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


const About = () => {
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
        <Title>About Us</Title>
        <Paragraph>
          Welcome to the nexus of innovation and expertise, where your dreams find their wings and ideas evolve into extraordinary realities. At our core, we are more than a service; we are architects of transformation, crafting solutions with passion, precision, and a commitment to excellence. Step into a realm where creativity meets code, where data tells compelling stories, and where design weaves identities that resonate. Join us in the journey of turning challenges into triumphs, as we redefine what's possible and build futures that inspire.
        </Paragraph>
      </Space>
      <Space direction="vertical" style={{ padding: "20px 0"}}>
        <Heading>Our Mission</Heading>
        <SubTitle>A One Service Provider That Get All The Job Done</SubTitle>
        <Paragraph style={{ paddingLeft: "25px"}}>
          Eliminate the need to contact multiple providers – our mission is to seamlessly deliver all your services under one roof. Our versatile teams are equipped to handle every aspect of your project, ensuring a streamlined and efficient experience. From development and design to analysis and marketing, trust us to be your comprehensive solution, sparing you the hassle of engaging with multiple service providers. Your journey simplified, all services delivered – that's our commitment to you.
        </Paragraph>
        <SubTitle>Discovery Session</SubTitle>
        <Paragraph style={{ paddingLeft: "25px"}}>
         Embark on a clarity-driven journey with our Discovery Sessions. We understand that laying the foundation for success requires a deep dive into your goals and visions. Our dedicated sessions are designed to unravel complexities, define objectives, and set the stage for a strategic roadmap. Let's collaborate to bring your ideas into focus, ensuring a clear path forward for every project. Uncover the possibilities and get ready to witness your vision materialize with precision and purpose.
        </Paragraph>
        <SubTitle>Save money why Starting Up</SubTitle>
        <Paragraph style={{ paddingLeft: "25px"}}>
          Starting your venture shouldn't break the bank. Discover cost-effective strategies and essential tips to optimize your resources, ensuring a robust foundation for sustainable growth. Learn how to make every penny count on your entrepreneurial journey.
        </Paragraph>
        <SubTitle>Learn To Acquire More Clients</SubTitle>
        <Paragraph style={{ paddingLeft: "25px"}}>
          Discover proven strategies to expand your client base and boost your business. From effective communication to targeted marketing, we equip you with the skills to attract and retain clients successfully. Elevate your client acquisition game and watch your business thrive. It's time to turn potential leads into long-term partnerships, and we're here to show you how.
        </Paragraph>
      </Space>

      <OurValue>
        <Title>Our Values</Title>
        <Offering>
          <Row gutter={24}>
            <Col xs={24} sm={12} md={8}>
              <Card>
                <SafetyCertificateFilled  style={{ fontSize: "24px", color: "#10c8ff"}}/>
                <SubHeading>Trust Worthy</SubHeading>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card>
                <LockFilled  style={{ fontSize: "24px", color: "#10c8ff"}}/>
                <SubHeading>Security</SubHeading>
              </Card>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Card>
                <CrownFilled  style={{ fontSize: "24px", color: "#10c8ff"}}/>
                <SubHeading>Excellence</SubHeading>
              </Card>
            </Col>
          </Row>
        </Offering>
      </OurValue>

        <CTA>
          <Content>
            <Title>Contact Us</Title>
            <SubHeadings>Have you decided to work <br/> on a project with us?</SubHeadings>
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

export default About