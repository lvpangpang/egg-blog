import React, { useCallback } from 'react';
import { Menu } from 'antd';

import { setItem, getItem } from '@/untils'; 

const menus  = getItem('menu');

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
          return <Menu.Item key={item.id}>{item.name}</Menu.Item>
        })
      }
      
    </Menu>
  );
}

export default Top;
