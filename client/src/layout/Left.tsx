import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
import { NotificationOutlined } from '@ant-design/icons';

import { setItem, getItem } from '@/untils'; 
import UserInfo from './userInfo';

const { SubMenu } = Menu;

const { menus } = UserInfo;

interface Props {
  top: string|number
}

function Left(props: Props) {

  const { top } = props;

  const [data, setData] = useState([]);

  const handleClickSubMenu = useCallback((params) => {
    const { key }  = params;
    setItem('curLeft', key);
  }, []);

  useEffect(() => {
    let list = menus.filter((item) => {
      return top == item['menuId']
    })[0];
    let curList = list?.childMenus;
    setData(curList);
  }, [top]);

  return(
    <Menu
      mode="inline"
      selectedKeys={[getItem('curLeft')]}
      openKeys={data&&data.map((item) => { return item['menuId'] + ''})}
      style={{ height: '100%', borderRight: 0 }}
      onClick={handleClickSubMenu}
    >
      {
        data && data.map((item) => {
          return (
            <SubMenu key={item['menuId']} icon={<NotificationOutlined />} title={item['menuName']}>
              {
                item?.childMenus.map((sonItem) => {
                  return <Menu.Item key={sonItem['menuId']}>
                    <Link to={sonItem?.url}>{sonItem?.menuName}</Link>
                  </Menu.Item>
                })
              }
            </SubMenu>
          );
        })
      }
    </Menu>
  );
}

export default Left;
