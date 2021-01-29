import React from 'react';
import { Form, Input, Button, message } from 'antd';

import request from '@/config/request';
import API from '@/config/api';

import './index.less';

const layout = {
  labelCol: { span: 0 },
  wrapperCol: { span: 24 },
};

function Login(props) {

  const onFinish = async (values: any) => {
    console.log(values)
    const {
      name,
      pwd
    } = values;
    const data = await request({
      method: 'post',
      url: API.login,
      data: {
        name,
        pwd
      }
    });
    localStorage.setItem('token', data?.token);
    localStorage.setItem('userInfo', JSON.stringify(data?.userInfo));
    message.success('登录成功');
    props.history.replace('/');
  };

  return <div className="login-box">
    <h1>闪电出行管理后台</h1>
    <Form
      {...layout}
      name="basic"
      onFinish={onFinish}
    >
      <Form.Item
        name="name"
        rules={[{ required: true, message: '请输入用户名' }]}
      >
        <Input placeholder='请输入用户名' />
      </Form.Item>

      <Form.Item
        name="pwd"
        rules={[{ required: true, message: '请输入密码' }]}
      >
        <Input.Password placeholder='请输入密码' />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-btn">
          登录
        </Button>
      </Form.Item>
    </Form>
  </div>;
}

export default Login;