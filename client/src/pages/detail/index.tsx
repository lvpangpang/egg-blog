import React from 'react';
import { Link } from 'react-router-dom';
import { observer, useLocalStore } from 'mobx-react';

import { Button } from 'antd';

import store from '@/store';

function Index() {
  const homeStore = useLocalStore(() => store.homeStore);
  return (
    <div className='home-box'>
      <div style={{fontSize: '30px',textAlign: 'center', lineHeight: '2'}}>{homeStore.num}</div>
      <div>
        <Button type='primary' onClick={homeStore.setNum}>点我</Button>
      </div>
      <br/>
      <div>
        <Link to={'/'}>回首页</Link>
      </div>
    </div>
  )
}

export default observer(Index);