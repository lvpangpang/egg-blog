import React from 'react';
import { Link } from 'react-router-dom';
import { observer, useLocalStore } from 'mobx-react';

import { Button } from 'antd';

import store from '@/store';
import './index.less';

function Index(props) {
  const homeStore = useLocalStore(() => store.homeStore);
  return (
    <div className='home-box'>
      <div className='text'>{`首页数据: ${homeStore.num}`}</div>
      <div>
        <Button type='primary' onClick={homeStore.setNum}>点我</Button>
      </div>
      <br/>
      <div>
        <Link to={'/detail'}>去详情</Link>
      </div>
    </div>
  )
}

export default observer(Index);