import React, { useState } from 'react';
import { styled } from "styled-components";
import { Space } from "antd";
import CreateTeam from './CreateTeam/createTeam';
import JoinTeam from './JoinTeam/joinTeam';

const tabItems = ["Create a Team", "Join a Team",];


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
  font-size: 45px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
  letter-spacing: -1.35px;

  @media (max-width: 1350px) {
    font-size: 35px;
  }
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

const TabBox = styled.div`
  display: flex;
  width: 40%;
  align-items: flex-start;
  gap: 24px;
  margin-top: 30px;

  @media (max-width: 1350px) {
    width: 100%;
  }
`;

const Tab = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  color: rgba(255, 255, 255, 0.70);
  font-family: "BR Firma";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  padding: 8px 2px;
  width: 170px;
  cursor: pointer;

  ${({ selected }) =>
  selected &&
  `
  border-bottom: 3px solid #10c8ff;
  color: #10c8ff;
`}
`;

const TabContent = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  margin-top: 20px;

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

const Community = () => {
  const [tab, setTab] = useState("Create a Team");

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
        <Title>OmniHub</Title>
        <Paragraph>
          At OmniHub, our platform is a dynamic hub where service providers seamlessly come together to form collaborative teams that offer a comprehensive range of services to businesses. In this vibrant space, individuals with diverse skills—be it software development, graphic design, or data analysis—can unite and create teams capable of addressing a multitude of business needs. On the flip side, businesses seeking specific services have the flexibility to browse through these talented teams and request the expertise they require. It's a platform where collaboration knows no bounds, fostering innovation and driving collective success for both service providers and businesses alike.
        </Paragraph>

        <TabBox>
            {tabItems.map((menu, index) => {
              return (
                <Tab selected={tab === menu} key={`menu-item-${index}`} onClick={() => setTab(menu)}>
                  {menu}
                </Tab>
              );
            })}
          </TabBox>
          <TabContent>
            { tab === "Create a Team" && <CreateTeam />}
            { tab === "Join a Team" && <JoinTeam />}
          </TabContent>
      </Space>
    </Root>
  )
}

export default Community