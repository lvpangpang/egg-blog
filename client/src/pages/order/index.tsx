import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { observer, useLocalStore } from 'mobx-react';

import { Button, Table } from 'antd';

import Search from './search';
import store from '@/store';
import './index.less';

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '操作',
    key: 'action',
    render: (text, record) => (
      <Button type="primary">删除</Button>
    ),
  },
];

function Index(props) {
  const homeStore = useLocalStore(() => store.homeStore);
  const { list } = homeStore;

  const getData = () => {
    
  };

  return (
    <div className='home-box'>
      
      {/* 条件搜索 */}
      <Search></Search>

      {/* 列表数据 */}
      <Table 
        dataSource={list.list} 
        columns={columns}
        pagination={{
          current: list.pageNum,
          total: list.total,
          showTotal: () => `共 ${list.total} 条`,
        }}
        // pageChange={pageChange} 
      />
    </div>
  )
}

export default observer(Index);