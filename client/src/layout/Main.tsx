import React, { useState } from 'react';
import { Layout, Menu, Button } from 'antd';

import Top from './Top';
import Left from './Left';
import { setItem, getItem } from '@/untils'; 
import './index.less';

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

function MainLayout(props) {
  const [index, setIndex] = useState(0);

  const loginOut = () => {
    localStorage.removeItem('token');
    window.location.replace('/login');
  };

  return (
    <Layout className="layout-box">
      <Header className="header">
        <div className="user-box">
          <span className='nick-name'>{getItem('userInfo')?.userName}</span>
          <Button type="primary" onClick={loginOut}>退出</Button>
        </div>
        <div className="logo">
          闪电出行
        </div>
        <Top handleClick={(id) => {setIndex(id)}}></Top>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Left top={index}></Left>
        </Sider>
        <Layout>
          <Content
            className="site-layout-background content"
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
      <Footer className="footer">©2021 Created by shandiantech, All Rights Reserved.</Footer>
    </Layout>
  )
}

export default MainLayout;