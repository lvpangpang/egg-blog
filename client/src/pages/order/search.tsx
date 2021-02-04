import React, { useRef } from 'react';
import { Row, Col, Form, Input, Select, Button } from 'antd';

const { Option } = Select;
const SearchFormItemLayout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 17 }
};

interface Props {
  handleSearch: (params: any) => void
}

function Search(props: Props) {

  const { handleSearch } = props;

  const refForm = useRef(null);

  const handleSubmit = (value) => {
    handleSearch(value);
  };

  const handleReset = () => {
    refForm.current.resetFields();
    handleSearch({});
  };

  return (
    <Form 
      ref={refForm}
      onFinish={handleSubmit} 
      style={{ marginBottom: '20px' }}
    >
      <Row>
        <Col span={6}>
          <Form.Item
            {...SearchFormItemLayout}
            label="用户名"
            name="userName"
          >
            <Input placeholder='请输入用户名' />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            {...SearchFormItemLayout}
            label="手机号"
            name="phone"
          >
            <Input placeholder='请输入手机号' />
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
          <Button className="ml-8" type="primary" onClick={handleReset}>清空</Button>
        </Col>
      </Row>
    </Form>
  );

}

export default Search;




