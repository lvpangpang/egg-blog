import React from 'react';

const Home = React.lazy(() => import('@/pages/home'));
const HomeDetails = React.lazy(() => import('@/pages/home/details'));
const Detail = React.lazy(() => import('@/pages/detail'));

const RouterConfig:Array<any> = [
  {
    name: 'home',
    path: '/',
    component: Home
  },
  {
    name: 'homeDetails',
    path: '/home',
    component: HomeDetails
  },
  {
    name: 'detail',
    path: '/detail',
    component: Detail
  },
];

export default RouterConfig;