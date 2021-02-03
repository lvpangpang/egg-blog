import React, { useCallback } from 'react';
import { Menu } from 'antd';

import { setItem, getItem } from '@/untils'; 
import UserInfo from './userInfo';

const { menus } = UserInfo;

interface Props {
  handleClick: (id:string) => void;
}

function Top(props: Props) {

  const { handleClick } = props;

  const handleClickMenu = useCallback((params) => {
    const key  = params?.key;
    setItem('curTop', key);
    handleClick(key);
  }, []);

  return(
    <Menu 
      theme="dark" 
      mode="horizontal" 
      selectedKeys={[getItem('curTop')]}
      onClick={handleClickMenu}
    >
      {
        menus && menus.map((item:any) => {
          return <Menu.Item key={item.menuId}>{item.menuName}</Menu.Item>
        })
      }
      
    </Menu>
  );
}

export default Top;
