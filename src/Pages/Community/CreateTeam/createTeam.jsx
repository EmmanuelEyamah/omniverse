import React, { useState }from 'react';
import { Form, Input, Select, Button, Row, Col } from 'antd';
import styled from 'styled-components';

const { Option } = Select;
const { TextArea } = Input;

const Root = styled.div`
    width: 100%;
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
  width: 100%;
  background: #1D1B1B;
  padding: 15px;
  border-color: rgba(255, 255, 255, 0.70);
  color: #10c8ff;
  font-size: 16px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.70);
  }

  &:hover,
  &:focus {
    border-color: #10c8ff;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    background: #1D1B1B;
  }
`;

const StyledButton = styled(Button)`
  width: 30%;
  background: #10c8ff;
  padding: 15px;
  color: #fff;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1350px) {
    width: 100%;
  }
`;

const StyledTextArea = styled(TextArea)`
  width: 100%;
  background: #1D1B1B;
  padding: 15px;
  border-color: rgba(255, 255, 255, 0.70);
  color: #10c8ff;
  font-size: 16px;
  resize: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.70);
  }

  &:hover,
  &:focus {
    border-color: #10c8ff;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    background: #1D1B1B;
  }
`;

const StyledSelect = styled(Select)`
  width: 100% !important;
  background: #1D1B1B !important;
  border-color: rgba(255, 255, 255, 0.70) !important;

  .ant-select-selection-placeholder {
    color: rgba(255, 255, 255, 0.70) !important;
  }

  &:focus {
    border-color: #10c8ff;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    background: #1D1B1B;
  }

  .ant-select-selector {
    background: #1D1B1B !important; 
    color: #1D1B1B !important; 
  }
`;



const CreateTeam = () => {
    const [showOtherInput, setShowOtherInput] = useState(false);

  const onFinish = (values) => {
    console.log('Received values:', values);
    // Handle form submission logic here
  };

  const handleCategoryChange = (value) => {
    setShowOtherInput(value === 'other');
  };

  return (
    <Root>
         <StyledForm
            name="teamCreationForm"
            initialValues={{ category: 'software' }}
            onFinish={onFinish}
            layout="vertical"
        >
            <StyledFormItem label="Category" name="category" rules={[{ required: true, message: 'Please select a category!' }]}>
                <StyledSelect placeholder="Select a Team Category" onChange={handleCategoryChange}>
                    <Option value="software">Software Development</Option>
                    <Option value="design">Graphic Design</Option>
                    <Option value="data">Data Analysis</Option>
                    <Option value="other">Other</Option>
                </StyledSelect>
            </StyledFormItem>

            {showOtherInput && (
                <StyledFormItem label="Other Category" name="otherCategory" rules={[{ required: true, message: 'Please enter the category!' }]}>
                    <StyledInput placeholder="Enter Your Field" />
                </StyledFormItem>
            )}

            <StyledFormItem label="Team Names" name="teamName" rules={[{ required: true, message: 'Please enter a team name!' }]}>
                <StyledInput placeholder="Enter the team name" />
            </StyledFormItem>

            <StyledFormItem label="Team Size" name="teamSize" rules={[{ required: true, message: 'Please enter the team size!' }]}>
                <StyledInput type="number" placeholder="Enter the team size" />
            </StyledFormItem>

            <StyledFormItem label="Target Audience" name="audience">
                <StyledInput placeholder="Enter the target audience" />
            </StyledFormItem>

            <StyledFormItem label="Team Purpose" name="teamPurpose" rules={[{ required: true, message: 'Please provide a brief discussion of the team purpose!' }]}>
                <StyledTextArea rows={4} placeholder="Briefly discuss the team purpose" />
            </StyledFormItem>

            <StyledFormItem label="Creator Information">
        <Row gutter={16}>
          <Col span={12}>
            <StyledFormItem label="Full Name" name="fullName" rules={[{ required: true, message: 'Please enter your full name!' }]}>
              <StyledInput placeholder="Full Name" />
            </StyledFormItem>
          </Col>
          <Col span={12}>
            <StyledFormItem label="Email" name="email" rules={[{ required: true, type: 'email', message: 'Please enter a valid email address!' }]}>
              <StyledInput placeholder="Email" />
            </StyledFormItem>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <StyledFormItem label="Phone" name="phone" rules={[{ required: true, message: 'Please enter your phone number!' }]}>
              <StyledInput placeholder="Phone Number" />
            </StyledFormItem>
          </Col>
          <Col span={12}>
            <StyledFormItem label="Experience" name="experience" rules={[{ required: true, message: 'Please enter your experience!' }]}>
              <StyledInput placeholder="Experience in your field" />
            </StyledFormItem>
          </Col>
        </Row>

        <StyledFormItem label="Portfolio Link" name="portfolioLink" rules={[{ required: true, message: 'Please enter a link to your portfolio!' }]}>
          <StyledInput placeholder="Portfolio Link" />
        </StyledFormItem>

        {/* Add other necessary info fields here */}
      </StyledFormItem>


            <StyledFormItem>
                <StyledButton type="primary" htmlType="submit">
                Create Team
                </StyledButton>
            </StyledFormItem>
        </StyledForm>


    </Root>
  )
}

export default CreateTeam