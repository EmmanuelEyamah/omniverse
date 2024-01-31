import React from 'react';
import { Form, Input, Select, Button} from 'antd';
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


const JoinTeam = () => {
    const onFinish = (values) => {
        console.log('Received values:', values);
        // Handle form submission logic here
      };
  return (
    <Root>
        <StyledForm name="joinTeamForm" onFinish={onFinish} layout="vertical">
        <StyledFormItem label="Full Name" name="fullName" rules={[{ required: true, message: 'Please enter your full name!' }]}>
            <StyledInput placeholder="Full Name" />
        </StyledFormItem>

        <StyledFormItem label="Email" name="email" rules={[{ required: true, type: 'email', message: 'Please enter a valid email address!' }]}>
            <StyledInput placeholder="Email" />
        </StyledFormItem>

        <StyledFormItem label="Why do you want to join this team?" name="reasonToJoin" rules={[{ required: true, message: 'Please provide a reason to join!' }]}>
            <StyledTextArea rows={4} placeholder="Explain why you want to join this team" />
        </StyledFormItem>

        <StyledFormItem label="Experience" name="experience" rules={[{ required: true, message: 'Please enter your experience!' }]}>
            <StyledInput placeholder="Your relevant experience" />
        </StyledFormItem>

        <StyledFormItem label="Select Team to Join" name="teamToJoin" rules={[{ required: true, message: 'Please select a team to join!' }]}>
            <StyledSelect placeholder="Select a team">
                <Option value="team1">Team 1</Option>
                <Option value="team2">Team 2</Option>
            </StyledSelect>
        </StyledFormItem>

        <StyledFormItem>
            <StyledButton type="primary" htmlType="submit">
            Join Team
            </StyledButton>
        </StyledFormItem>
        </StyledForm>

    </Root>
  )
}

export default JoinTeam