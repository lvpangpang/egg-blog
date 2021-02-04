import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { observer, useLocalStore } from 'mobx-react';
import { Button, Table } from 'antd';

import request from '@/config/request';
import Search from './search';
import store from '@/store';
import './index.less';

const columns = [
  {
    title: 'id',
    dataIndex: 'id'
  },
  {
    title: '姓名',
    dataIndex: 'username'
  },
  {
    title: '手机号',
    dataIndex: 'phone'
  },
  {
    title: '创建时间',
    dataIndex: 'create_time'
  },
  {
    title: '修改时间',
    dataIndex: 'update_time'
  },
  {
    title: '操作',
    key: 'action',
    render: (text, record) => (
      <Button type="primary">删除</Button>
    ),
  },
];

let search = {};

function Index(props) {
  const homeStore = useLocalStore(() => store.homeStore);
  const { list } = homeStore;

  const [data, setData]= useState({
    list: [],
    current: 1,
    pageSize: 1,
    total: 0
  });

  const [loading, setLoading] = useState(false);

  const getData = async (params={}) => {
    search = params;
    setLoading(true);
    const data = await request({
      url: '/user/list',
      params: {
        ...search
      }
    });
    setLoading(false);
    setData(data);
  };

  const pageChange = (value) => {
    const { current } = value;
    search.current = current;
    getData();
  };

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className='home-box'>
      
      {/* 条件搜索 */}
      <Search 
        handleSearch={getData}
      ></Search>

      {/* 列表数据 */}
      <Table 
        loading={loading}
        dataSource={data.list} 
        columns={columns}
        pagination={{
          current: data.pageIndex,
          total: data.total,
          showTotal: () => `共 ${data.total} 条`,
        }}
        onChange={pageChange}
      />
    </div>
  )
}

export default observer(Index);