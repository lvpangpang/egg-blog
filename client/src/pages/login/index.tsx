import React from 'react';
import { Form, Input, Button } from 'antd';

import request from '@/config/request';
import API from '@/config/api';

import './index.less';

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

function Login() {

  const onFinish = (values: any) => {
    console.log(values)
    const {
      name,
      pwd
    } = values;
    request({
      method: 'post',
      url: API.login,
      data: {
        name,
        pwd
      }
    });
  };

  return <div className="login-box">
    <h1>闪电出行管理后台</h1>
    <Form
      {...layout}
      name="basic"
      onFinish={onFinish}
    >
      <Form.Item
        label="用户名"
        name="name"
        rules={[{ required: true, message: '请输入用户名' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="密码"
        name="pwd"
        rules={[{ required: true, message: '请输入密码' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          登录
        </Button>
      </Form.Item>
    </Form>
  </div>;
}

export default Login;