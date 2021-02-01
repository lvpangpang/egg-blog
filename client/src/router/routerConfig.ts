import React from 'react';

const Welcome = React.lazy(() => import('@/pages/welcome'));
const Home = React.lazy(() => import('@/pages/home'));
const HomeDetails = React.lazy(() => import('@/pages/home/details'));
const Detail = React.lazy(() => import('@/pages/detail'));

const RouterConfig:Array<any> = [
  {
    name: 'welcome',
    path: '/',
    component: Welcome
  },
  {
    name: 'home',
    path: '/home/list',
    component: Home
  },
  {
    name: 'homeDetails',
    path: '/homeDetails',
    component: HomeDetails
  },
  {
    name: 'detail',
    path: '/detail',
    component: Detail
  }
];

export default RouterConfig;