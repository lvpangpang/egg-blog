import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { observer, useLocalStore } from 'mobx-react';
import { Button, Table, Divider } from 'antd';

import Search from './search';
import store from '@/store';
import './index.less';

const columns = (fn) => {
  const { del } = fn;
  return [
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
      render: (record) => (
        <>
          <Button type="primary" onClick={() => {del(record.id)}}>删除</Button>
          <Divider type="vertical" />
          <Link to="/user/details">详情</Link>
        </>
      ),
    },
  ];
}

function Index(props) {
  const orderStore = useLocalStore(() => store.orderStore);
  const { search, data, loading, getData, setSearch, delData, exportData } = orderStore;

  const pageChange = (value) => {
    const { current } = value;
    getData(search, current);
  };

  const handleExport = (value) => {
    exportData(value);
  };

  useEffect(() => {
    getData();
  }, [])

  return (
    <div className='home-box'>
      
      {/* 条件搜索 */}
      <Search 
        initSearch={search}
        handleReset={setSearch}
        handleSearch={getData}
        handleExport={handleExport}
      ></Search>

      {/* 列表数据 */}
      <Table 
        loading={loading}
        dataSource={data.list} 
        columns={columns({del: delData})}
        pagination={{
          current: data.current,
          total: data.total,
          showTotal: () => `共 ${data.total} 条`,
        }}
        onChange={pageChange}
      />
    </div>
  )
}

export default observer(Index);