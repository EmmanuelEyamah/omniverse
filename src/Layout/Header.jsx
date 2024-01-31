import React, { useState} from 'react'
import { styled } from "styled-components";
import { Tabs, Drawer, Space, Menu } from "antd";
import { useNavigate } from "react-router-dom";
import { MenuOutlined, CloseCircleOutlined } from "@ant-design/icons";



const Root = styled.div`
  box-sizing: border-box;
  background: #1D1B1B;
  width: 100%;
  height: 50px;
  padding: 15px 40px 15px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .ant-tabs-top > .ant-tabs-nav::before {
    border-bottom: 0;
    padding-bottom: 0; 
  }
  .ant-tabs .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
    color: #10c8ff;
  }
  .ant-tabs-tab-btn {
    color: #fff;
    font-family: Mukta;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
  .ant-tabs-ink-bar {
    background: #10c8ff;
  }

  @media (min-width: 775px) {
    .menu-icon {
      display: none;
    }
  } 

  @media (max-width: 775px) {
    .tabs-and-right-box {
      display: none;
    }
  }
`;

const Logo = styled.img`
  width: 200px;
  flex-shrink: 0;
`;

const StyledMenu = styled(Menu)`
  .ant-menu-item {
  margin-bottom: 30px;
  color: #10c8ff;
  padding: 15px 20px;
  height: 40px;
  font-size: 26px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px; /* 150% */
  letter-spacing: 0.08px;
}

.ant-menu-item-selected {
  background: none;
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 6px;
    height: 100%;
    background: #FFF !important;
  }
}
`;

const Button = styled.div`
  color: #10c8ff;
  font-family: Jost;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 18px */
  letter-spacing: 0.54px;
  width: 100%;
  height: 15px;
  padding: 5px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 2px solid #10c8ff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;



const Header = () => {
  const[ openMenu, setOpenMenu]= useState(false);
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
        <Space size={22}>
          <Button className="tabs-and-right-box" style={{ background: "#10c8ff", color: "#fff"}} onClick={() => navigate("/community")}>OMNIHUB</Button>
          <Button className="tabs-and-right-box" onClick={() => navigate("/bookings")}>Book A Discover</Button>
        </Space>
        <MenuOutlined className="menu-icon" onClick={() => { setOpenMenu(true)}} style={{ color: "#FFF", fontSize: "20px"}}/>
        <Drawer
          open={openMenu}
          width="100%"
          onClose={() => {
            setOpenMenu(false)
          }}
          closable={false}
          style={{ backgroundColor: "#1D1B1B"}}
          title={
            <Space style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center"}}>
              <Logo src='/assets/navlogo.png' alt='logo' />
              <CloseCircleOutlined onClick={() => { setOpenMenu(false)}} style={{ color: "#FFF", fontSize: "20px"}}/>
            </Space>
          }
        >
          <StyledMenu 
            mode='inline'
            // selectedKeys={}
            selectable
            items={[
              { key: "/", label: "Home" },
              { key: "/about", label: "About" },
              { key: "/service", label: "Services" },
            ]}
            onSelect={(value) => {
              navigate(value.key);
              setOpenMenu(false);
            }}
            style={{ backgroundColor: "#1D1B1B", fontSize: "24px"}}
          />
          <Space size={22} direction="vertical">
            <Button className="tabs-and-right-box" style={{ background: "#10c8ff", color: "#fff", width: "100%", fontSize: "18px"}} onClick={() => {navigate("/community"); setOpenMenu(false)}}>OMNIHUB</Button>
            <Button className="tabs-and-right-box" style={{ width: "100%", fontSize: "18px"}} onClick={() => {navigate("/bookings"); setOpenMenu(false)}}>Book A Discover</Button>
          </Space>
        </Drawer>
    </Root>
  )
}

export default Header