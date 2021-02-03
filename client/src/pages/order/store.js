import { makeAutoObservable } from 'mobx';

class HomeStore {
  constructor() {
    makeAutoObservable(this);
  }
  list={
    list : [{
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
      },
      {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
      },
    ],
    pageNum: 1,
    total: 100
  };
  setList = (data) => {
    this.list = data;
  }
}

export default HomeStore;