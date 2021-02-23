import React from 'react';

const Welcome = React.lazy(() => import('@/pages/welcome/index'));
const UserList = React.lazy(() => import('@/pages/config/user/index'));
const UserDetails = React.lazy(() => import('@/pages/config/user/details'));

const RouterConfig:Array<any> = [
  {
    name: 'welcome',
    path: '/',
    component: Welcome
  },
  {
    name: 'user',
    path: '/config/user',
    component: UserList
  },
  {
    name: 'userDetails',
    path: '/config/userDetails',
    component: UserDetails
  }
];

export default RouterConfig;