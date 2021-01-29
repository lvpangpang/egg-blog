import React, { useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Button } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

import RouterConfig from '@/router/routerConfig';
import { getItem } from '@/untils'; 
import './index.less';

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

function MainLayout(props) {
  const [index, setIndex] = useState(1);
  const handleClickMenu = (parmas) => {
    setIndex(parseInt(parmas.key));
  };

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
        <Menu 
          theme="dark" 
          mode="horizontal" 
          defaultSelectedKeys={['1']}
          onClick={handleClickMenu}
        >
          <Menu.Item key={1}>书籍中心</Menu.Item>
          <Menu.Item key={2}>用户中心</Menu.Item>
          <Menu.Item key={3}>配置中心</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            {
              index === 1 &&  <SubMenu key="sub1" icon={<UserOutlined />} title="书籍管理">
                <Menu.Item key="1">
                  <Link to='/'>书籍列表</Link>
                </Menu.Item>
              </SubMenu>
            }

            {
              index === 2 && <SubMenu key="sub2" icon={<LaptopOutlined />} title="用户管理">
                <Menu.Item key="5">
                  <Link to='/detail'>用户列表</Link>
                </Menu.Item>
              </SubMenu>
            }

            {
              index === 3 && <SubMenu key="sub3" icon={<NotificationOutlined />} title="配置管理">
                <Menu.Item key="9">配置列表</Menu.Item>
              </SubMenu>
            }

          </Menu>
        </Sider>
        <Layout>
          <Content
            className="site-layout-background content"
          >
            <Switch> 
              {
                RouterConfig.map((item) => {
                  return <Route exact path={item.path} component={item.component} />;
                })
              }         
            </Switch>
          </Content>
        </Layout>
      </Layout>
      <Footer className="footer">©2021 Created by shandiantech, All Rights Reserved.</Footer>
    </Layout>
  )
}

export default MainLayout;