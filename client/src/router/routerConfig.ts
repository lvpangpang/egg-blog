import React from 'react';

const Welcome = React.lazy(() => import('@/pages/welcome/index'));
const OrderList = React.lazy(() => import('@/pages/order/index'));
const OrderDetails = React.lazy(() => import('@/pages/order/details'));

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
  },
  {
    name: 'orderDetails',
    path: '/order/details',
    component: OrderDetails
  }
];

export default RouterConfig;