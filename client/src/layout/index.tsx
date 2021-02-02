import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';

import RouterConfig from '@/router/routerConfig';
import { getItem } from '@/untils'; 
import Main from './main';
import './index.less';

function MainLayout() {
  return (
    getItem('token') ? 
    <Main>
      <Switch> 
        {
          RouterConfig.map((item, i) => {
            return (<Route exact key={i} path={item.path} component={item.component}/>)
          })
        } 
        <Redirect to='/'></Redirect>
      </Switch>
    </Main>
    : <Redirect to='/login'></Redirect>
  )
}

export default MainLayout;