import React from 'react';

const Welcome = React.lazy(() => import('@/pages/welcome/index'));
const OrderList = React.lazy(() => import('@/pages/order/index'));

const RouterConfig:Array<any> = [
  {
    name: 'welcome',
    path: '/',
    component: Welcome
  },
  {
    name: 'order',
    path: '/order/list',
    component: OrderList
  }
];

export default RouterConfig;