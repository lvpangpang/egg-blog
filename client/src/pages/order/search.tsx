import React, { useRef } from 'react';
import { Row, Col, Form, Input, Select, Button } from 'antd';

const { Option } = Select;
const SearchFormItemLayout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 17 }
};

interface Props {
  initSearch: object,
  handleReset: () => void,
  handleSearch: (params: any) => void
}

function Search(props: Props) {

  const { initSearch, handleSearch, handleReset } = props;

  const refForm = useRef(null);

  const handleSubmit = (value) => {
    handleSearch(value);
  };

  const _handleReset = () => {
    refForm.current.setFieldsValue({userName: '', phone: ''});
    handleReset();
    // 下面这行会把值重置到initialValue
    // refForm.current.resetFields();
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
            initialValue={initSearch.userName}
          >
            <Input placeholder='请输入用户名' />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item
            {...SearchFormItemLayout}
            label="手机号"
            name="phone"
            initialValue={initSearch.phone}
          >
            <Input placeholder='请输入手机号' />
          </Form.Item>
        </Col>
      </Row>

      <Row>
        <Col span={24} style={{ textAlign: "right" }}>
          <Button className="ml-8" type="primary" htmlType="submit">搜索</Button>
          <Button className="ml-8" onClick={_handleReset}>清空</Button>
        </Col>
      </Row>
    </Form>
  );

}

export default Search;




