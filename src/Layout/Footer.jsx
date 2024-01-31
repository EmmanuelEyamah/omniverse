import React from 'react'
import { styled } from "styled-components";
import { Tabs } from "antd";
import { useNavigate } from "react-router-dom";



const Root = styled.div`
  box-sizing: border-box;
  background: #1D1B1B;
  width: 100%;
  height: 100%;
  padding: 0px 40px 0px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .ant-tabs-top > .ant-tabs-nav::before {
    border-bottom: 0;
    padding-bottom: 0; 
  }
  .ant-tabs .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #fff;
  }
  .ant-tabs-tab-btn {
    color: #fff;
    font-family: Mukta;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
  .ant-tabs-ink-bar {
    background: none;
  }

  @media (max-width: 775px) {
    flex-direction: column;
    height: 100%;
  } 

  @media (max-width: 775px) {
    .ant-tabs-nav {
      flex-direction: column
    }
  } 
`;

const Logo = styled.img`
  width: 200px;
  flex-shrink: 0;
`;

const Copyright = styled.div`
  color: #fff;
  font-family: Mukta;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

const Header = () => {
  const navigate = useNavigate()
  return (
    <Root>
      <Logo src="/assets/navlogo.png" alt="logo"/>
      <Tabs
          items={[
            { key: "/", label: "Home" },
            { key: "/about", label: "About" },
            { key: "/services", label: "Services" },
          ]}
          onChange={(activeKey) => {
            navigate(activeKey);
          }}
          className="tabs-and-right-box"
        />
        <Copyright>@Copyright 2024 Omintech</Copyright>
    </Root>
  )
}

export default Header