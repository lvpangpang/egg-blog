import React from 'react';
import { Row, Col, Form, Input, Select, Button } from 'antd';

const { Option } = Select;
const SearchFormItemLayout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 17 }
};

function Search() {

  const handleSubmit = (value) => {
    console.log(value);
  };

  return (
    <Form onFinish={handleSubmit} style={{ marginBottom: '20px' }}>
      <Row>
        <Col span={6}>
          <Form.Item
            {...SearchFormItemLayout}
            label="订单编号"
            name="orderNo"
          >
            <Input placeholder='请输入用户名' />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            {...SearchFormItemLayout}
            label="订单状态"
            name="orderStatus"
            initialValue='1'
          >
            <Select mode="multiple">
              <Option value='1'>去接乘客</Option>
              <Option value='2'>等待乘客上车</Option>
              <Option value='3'>已付款</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={24} style={{ textAlign: "right" }}>
          <Button className="ml-8" type="primary" htmlType="submit">搜索</Button>
        </Col>
      </Row>
    </Form>
  );

}

export default Search;




