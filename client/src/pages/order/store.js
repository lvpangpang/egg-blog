import { makeAutoObservable } from 'mobx';

import {message} from 'antd';
import request from '@/config/request';


class OrderStore {
  constructor() {
    makeAutoObservable(this);
  }

  getData = async (params = this.search, current=1) => {
    console.log(current)
    this.setSearch({...params, current});
    this.setLoading(true);
    const data = await request({
      url: '/user/list',
      params: {
        ...params,
        current
      }
    });
    this.setLoading(false);
    console.log(data);
    this.setData(data);
  };

  delData = async (id) => {
    const data = await request({
      method: 'post',
      url: '/user/del',
      data: {
        id
      }
    });
    this.getData();
    message.success('删除成功')
  };
  
  search = {}
  setSearch = (data) => {
    this.search = data || {};
  }

  data = {
    list: [],
    current: 1,
    current: 1,
    total: 0
  }
  setData = (data) => {
    this.data = data;
  }

  loading = false
  setLoading = (data) => {
    this.loading = data;
  }

}

export default OrderStore;