import React from 'react';
import { styled } from "styled-components";
import { Form, Input, Select, Space, Button } from "antd";

const { Option } = Select;

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

const SubTitle = styled.div`
  color: #FFF;
  font-family: "Playfair Display";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 36px */
`;


const StyledForm = styled(Form)`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  
  label {
    font-weight: 400;
    color: #10c8ff !important;
    font-size: 16px !important;
  }
`;

const StyledFormItem = styled(Form.Item)`
  margin-bottom: 16px;
`;

const StyledInput = styled(Input)`
  width: 45%;
  background: #1D1B1B;
  padding: 15px;
  border-color: rgba(255, 255, 255, 0.70);
  color: #10c8ff;
  font-size: 16px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.70); /* Style for placeholder */
  }

  &:hover,
  &:focus {
    border-color: #10c8ff; /* Style for focused input */
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    background: #1D1B1B;
  }

  @media (max-width: 1350px) {
    width: 100% !important;
  }
`;

const StyledButton = styled(Button)`
  width: 20%;
  background: #10c8ff;
  padding: 15px;
  color: #fff;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1350px) {
    width: 100% !important;
  }
`;

const StyledTextArea = styled(Input.TextArea)`
  width: 45%;
  background: #1D1B1B;
  padding: 15px;
  border-color: rgba(255, 255, 255, 0.70);
  color: #10c8ff;
  font-size: 16px;
  resize: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.70); /* Style for placeholder */
  }

  &:hover,
  &:focus {
    border-color: #10c8ff; /* Style for focused input */
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    background: #1D1B1B;
  }

  @media (max-width: 1350px) {
    width: 100% !important;
  }
`;

const StyledSelect = styled(Select)`
  width: 45% !important;
  background: #1D1B1B !important;
  border-color: rgba(255, 255, 255, 0.70) !important;

  .ant-select-selection-placeholder {
    color: rgba(255, 255, 255, 0.70) !important; /* Style for placeholder */
  }

  &:focus {
    border-color: #10c8ff; /* Style for focused input */
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    background: #1D1B1B;
  }

 .ant-select-selector {
    background: #1D1B1B !important; 
    color: #1D1B1B !important; 
  }

  @media (max-width: 1350px) {
    width: 100% !important;
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


const Bookings = () => {
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
        <Title>Discover Session</Title>
        <Paragraph>
          Welcome to Omnitech's Discovery Sessions, your gateway to strategic clarity and business empowerment. Our tailored forms pave the way for insightful conversations, providing you with the opportunity to articulate your vision, goals, and aspirations. Whether you're at the inception stage or aiming to scale your business, our team is eager to unravel the unique facets of your journey. Through transparent discussions and thoughtful planning, we aim to align our expertise with your objectives, creating a roadmap that propels your business forward. Join us in the discovery process — an immersive experience where ideas flourish, and plans are meticulously crafted to turn your business dreams into realities..
        </Paragraph>
      </Space>

      <Space direction="vertical" style={{ padding: "20px 0"}} styles={{ width: "100%"}}>
        <Heading>Complete the Form Below:</Heading>
        <SubTitle>Start here. Your journey begins with a few simple fields.</SubTitle>

        <StyledForm
          name="basicForm"
          initialValues={{ remember: true }}
          layout='vertical'
        >
        <StyledFormItem
          label="Full Name"
          name="fullName"
          rules={[{ required: true, message: 'Please input your full name!' }]}
        >
          <StyledInput placeholder="Enter your full name" />
        </StyledFormItem>

          <StyledFormItem
            label="Email Address"
            name="email"
            rules={[{ required: true, type: 'email', message: 'Please input a valid email address!' }]}
          >
            <StyledInput placeholder="Enter your email address"/>
          </StyledFormItem>
      
          <StyledFormItem
            label="Phone Number"
            name="phone"
            rules={[{ required: true, message: 'Please input your phone number!' }]}
          >
            <StyledInput placeholder="Enter your phone number"/>
          </StyledFormItem>

        <StyledFormItem
          label="Select Service Category"
          name="serviceCategory"
          rules={[{ required: true, message: 'Please select a service category!' }]}
        >
          <StyledSelect placeholder="Select a service category">
            <Option value="software">Software Development</Option>
            <Option value="design">Graphic Design</Option>
            <Option value="data">Data Analysis</Option>
          </StyledSelect>
        </StyledFormItem>

        <StyledFormItem
          label="Select Project Scale"
          name="projectScale"
          rules={[{ required: true, message: 'Please select a project scale!' }]}
        >
          <StyledSelect placeholder="Select a project scale">
            <Option value="small">Small</Option>
            <Option value="medium">Medium</Option>
            <Option value="large">Large</Option>
          </StyledSelect>
        </StyledFormItem>

        <StyledFormItem
          label="Target Audience"
          name="targetAudience"
        >
          <StyledInput placeholder="Enter your target audience" />
        </StyledFormItem>

        <StyledFormItem
          label="Company Name"
          name="companyName"
        >
          <StyledInput placeholder="Enter your company name" />
        </StyledFormItem>

        <StyledFormItem
          label="Budget Range/Estimate"
          name="budget"
        >
          <StyledInput placeholder="Enter your budget range or estimate" />
        </StyledFormItem>

        <StyledFormItem
          label="Brief Description"
          name="briefDescription"
        >
          <StyledTextArea placeholder="Enter a brief description" />
        </StyledFormItem>

        <StyledFormItem
          label="Mood Of Communication"
          name="serviceCall"
          rules={[{ required: true, message: 'Please select a service category!' }]}
        >
          <StyledSelect placeholder="Select a commnication method" style={{ background: "red"}}>
            <Option value="software">Software Development</Option>
            <Option value="design">Graphic Design</Option>
            <Option value="data">Data Analysis</Option>
          </StyledSelect>
        </StyledFormItem>

        <StyledFormItem>
          <StyledButton type="primary" htmlType="submit">
            Submit
          </StyledButton>
        </StyledFormItem>
      </StyledForm>
    
      </Space>
    </Root>
  )
}

export default Bookings